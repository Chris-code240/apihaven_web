import { Outlet } from "react-router-dom"
import NavBar from "./main components/NavBar"
export default function MainLayout(){

    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}