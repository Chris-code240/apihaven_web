import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./main components/NavBar"

export default function MainLayout(){
    const location = useLocation()
    return (
        <div className="bg-[#D9D9D9] bg-opacity-[10%] ">
            {location.pathname !== '/auth' && location.pathname !== '/login' && location.pathname !== '/signup' && (<NavBar />)}
            <Outlet />
        </div>
    )
}