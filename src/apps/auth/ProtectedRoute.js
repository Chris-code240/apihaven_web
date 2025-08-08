
import { useContext } from "react";
import { UserContext } from "../auth/UserContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);
  const token = JSON.parse(localStorage.getItem("apihaven_token"))

  const isLoggedIn = (token?.access && token?.refresh) || (user?.token?.access && user?.token?.refresh) || true;
  // console.log(user)
  if (!isLoggedIn) {
    return <Navigate to="/auth" />;
  }

  return children;
}
