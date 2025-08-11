import { useLocation, useNavigate } from "react-router-dom"
export default function AsideLink({text, icon}){

    const location = useLocation()

    return (
        <li className="cursor-pointer hover: text-opacity-100 text-opacity-60 flex items-center space-x-1.5 font-semibold text-[12px] "><img src={"/icons/" + icon} alt={text} /> <p className={`${location.pathname.includes(text.toLowerCase())?'':'opacity-60'}`}>{text}</p></li>
    )
}