import Aside from "./Aside";
import { Outlet } from "react-router-dom";
export default function Dashboard() {

  return (
    <main className="bg-[#D9D9D9] bg-opacity-[10%]  w-screen h-screen">
        <div className="container mx-auto flex items-center w-full h-full">
            <Aside />
            <div className="w-full h-full md:ml-[10%]">
              <Outlet />
            </div>
        </div>

    </main>
  );
}
