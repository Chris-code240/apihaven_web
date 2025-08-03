import AppLogo from "./AppLogo"
import User from "./User"
import GithubButton from "./GithubButton"
function NavBar(){

    return (
        <header>
            <div className="container mx-auto px-6 md:px-auto">
                <div className="flex justify-between py-1 h-[65px]">
                    <AppLogo />
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