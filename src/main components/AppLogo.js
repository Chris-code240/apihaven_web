const AppLogo = ({user_profile_url = null, username = null}) => {

    return (
        <div className="flex items-center space-x-2 md:text-[22px]">
            <span className="font-bold">{'{'}</span> <span>APIHaven</span><span className="font-bold">{'}'}</span> 
        </div>
    )
}

export default AppLogo