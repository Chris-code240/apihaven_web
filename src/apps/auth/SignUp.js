import AppLogo from "../../main components/AppLogo";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../auth/UserContext";
import apihavenCLient from "./axios";

export default function SignUpPage() {
  const { user, loginUser } = useContext(UserContext);
  const [userCredentials, setUserCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  if (user?.username !== "" || user?.email !== "") {
    return <Navigate to="/dashboard" />;
  }

  const handleChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resdata = await apihavenCLient.post("/app/signup", {
        email: userCredentials.email,
        password: userCredentials.password,
      });

      if (resdata?.data?.access) {
        loginUser({
          access: resdata.data.access,
          refresh: resdata.data.refresh,
          email: userCredentials.email,
          username: resdata.data.username || "", // optional
        });

        navigate("/dashboard");
      } else {
        throw new Error(resdata?.data?.details || "Invalid response");
      }
    } catch (error) {
      alert(String(error));
    }
  };



    return (
        <article className="flex items-center h-screen">
            <div className="hidden md:block w-[50%]">
                <div className="relative w-full h-screen overflow-hidden bg-white">
                <div className="absolute top-[50%] left-[50%] w-full h-full bg">
                    <div className="absolute w-[30vw] h-[30vh] bg-[#ea00ffe7] rounded-full blur-3xl opacity-30 animate-float1"></div>
                    <div className="absolute w-[30vw] h-[30vh] bg-[#00FF73] rounded-full blur-3xl opacity-20 animate-float3"></div>
                </div>
                <div className="container mx-auto w-full h-full px-3">
                    <div className="text-start flex items-start justify-center flex-col w-full h-full">
                        <h1><AppLogo /></h1>
                        <h2 className="text-[32px] font-semibold">Setup your free account in seconds</h2>
                    </div>
                </div>
                </div>

            </div>
            <div className="w-[100%] md:w-[50%] h-full bg-[#181818]">
                <div className="md:w-[50%] w-[90%] mx-auto space-y-12">
                <div>
                    <p className="text-[22px] text-white opacity-[60%]">
                    Create Your Free Account  
                    </p>
                    <p className="text-[18px] text-[#d9d9d9] opacity-[50%]">
                        Connect with:
                    </p>
                </div>
                <div className="w-full space-y-1.5">
                    <button className="bg-white text-black w-full h-[32px] rounded-sm flex items-center justify-center space-x-3">
                        <img src="/icons/google.svg" className="w-[20px] z-10" alt="github"/> <span>Google</span>
                        
                    </button>
                    <button className="bg-white text-black w-full h-[32px] rounded-sm flex items-center justify-center space-x-3">
                        <img src="/icons/new.svg" className="w-[20px] z-10" alt="github"/> <span>GitHub</span>
                    </button>
                </div>
                <div className="relative w-full">
                    <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
                    <div className="email w-[65%] bg-[#181818] text-[#D9D9D9] flex justify-center items-center">
                        Or Continue with Email
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="text-gray-300 w-full space-y-1.5">
                    <input
                    type="email"
                    required
                    name="email"
                    onChange={handleChange}
                    className="focus:outline-none bg-[#181818] border border-gray-300 w-full h-[32px] rounded-sm px-2"
                    placeholder="example@email.com"
                    />
                    <input
                    type="password"
                    required
                    name="password"
                    onChange={handleChange}
                    className="focus:outline-none bg-[#181818] border border-gray-300 w-full h-[32px] rounded-sm px-2"
                    placeholder="A very unique password"
                    />
                    <button
                    type="submit"
                    className="w-full h-[40px] bg-[#D9D9D9] hover:bg-opacity-[30%] font-medium bg-opacity-[60%] rounded-sm text-white"
                    >
                    Continue
                    </button>
                </form>
                <div className="text-white flex items-center">
                    Already have account? <Link to='/login'> <p href="#" className="text-blue-600 active:text-blue-500 visited:text-blue-500">Login</p></Link>
                </div>
                </div>
            </div>
        </article>
    )
}