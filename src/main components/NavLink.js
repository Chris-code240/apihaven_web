export default function NavLink({link_name, link_url=null, alt=''}){

    if (link_url === null){
        link_url = `/${link_name.toLocaleLowerCase()}`
    }
    return (
        <div title={alt} className="text-[#00000060] text-medium md:text-[16px] hover:text-black cursor-pointer">
            <a href={link_url}>{link_name}</a>
        </div>
    )
}