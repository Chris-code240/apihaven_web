import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./main components/NavBar"

export default function MainLayout(){
    const location = useLocation()
    return (
        <div>
            {location.pathname !== '/auth' && location.pathname !== '/login' && location.pathname !== '/signup' && (<NavBar />)}
            <Outlet />
        </div>
    )
}