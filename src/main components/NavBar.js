import AppLogo from "./AppLogo"
import GithubButton from "./GithubButton"
import NavLink from "./NavLink"
function NavBar(){

    return (
        <header className="bg-[#D9D9D9] bg-opacity-[10%]">
            <div className="container mx-auto px-6 md:px-0">
                <div className="flex justify-between py-1 h-[65px]">
                    <AppLogo />
                    <div className="flex items-center space-x-3">
                        <NavLink link_name="Home" />
                        <NavLink link_name="Docs" />
                    </div>
                    <div className="flex items-center space-x-3">
                        <GithubButton />
                    </div>
                
                </div>
            </div>
            <hr/>
        </header>
    )
}

export default NavBar