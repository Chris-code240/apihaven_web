
export default function AsideLink({text, icon}){

    return (
        <li className="cursor-pointer hover: text-opacity-100 text-opacity-60 flex items-center space-x-1.5 font-medium text-[12px] "><img src={"/icons/" + icon} /> <p className="">{text}</p></li>
    )
}