import React, { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import {apihavenClient as apiClient} from "./axios";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    token: { access: "", refresh: "" },
    currentProject: "",
  });

  

  // Hydrate user state from localStorage
  useEffect(() => {
    const tokenString = localStorage.getItem("apihaven_token");
    if (tokenString) {
      const token = JSON.parse(tokenString);
      setUser((prev) => ({
        ...prev,
        token: {
          access: token.access,
          refresh: token.refresh,
        },
      }));
    }
  }, []);

  // Axios interceptors
  useEffect(() => {
    const requestInterceptor = apiClient.interceptors.request.use(
      (config) => {
        const accessToken = user.token.access;
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
          config.headers["X-Project-ID"] = user?.currentProject;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = apiClient.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        // If 401 and not already retried
        if (
          error.response?.status === 401 &&
          !originalRequest._retry &&
          user.token.refresh
        ) {
          originalRequest._retry = true;

          try {
            const res = await apiClient.post("/api/token/refresh/", {
              refresh: user.token.refresh,
            });

            const newAccess = res.data.access;

            // Update state and localStorage
            const updatedUser = {
              ...user,
              token: {
                ...user.token,
                access: newAccess,
              },
            };
            setUser(updatedUser);
            localStorage.setItem(
              "apihaven_token",
              JSON.stringify({
                access: newAccess,
                refresh: user.token.refresh,
              })
            );

            // Retry the original request with new token
            originalRequest.headers.Authorization = `Bearer ${newAccess}`;
            return apiClient(originalRequest);
          } catch (refreshError) {
            // Refresh token invalid or expired — log out user
            logoutUser();
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      apiClient.interceptors.request.eject(requestInterceptor);
      apiClient.interceptors.response.eject(responseInterceptor);
    };
  }, [user.token.access, user.token.refresh]);

  // Login / Logout helpers
  const loginUser = ({ access, refresh, email, username }) => {
    const newUser = {
      username,
      email,
      token: { access, refresh },
    };
    setUser(newUser);
    localStorage.setItem("apihaven_token", JSON.stringify({ access, refresh }));
  };

  const logoutUser = () => {
    setUser({
      username: "",
      email: "",
      token: { access: "", refresh: "" },
      currentProject: "",
    });
    localStorage.removeItem("apihaven_token");
  };

  return (
    <UserContext.Provider value={{ user, setUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
