import AsideLink from "./AsideLink"
import { Link } from "react-router-dom"
export default function Aside(){

    return (
        <aside className="hidden md:block text-start w-[10%] h-screen">
            <ul className=" pt-6 space-y-6">
                <Link to={"projects"} >
                    <AsideLink text={"Projects"} icon={"fidget.svg"} />
                 </Link>
                <AsideLink text={"Settings"} icon={"settings.svg"} />
            </ul>
        </aside>
    )
}