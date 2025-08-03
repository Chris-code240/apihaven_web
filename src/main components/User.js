const User = ({user_profile_url = null, username = null}) => {
    if (user_profile_url === null){
        user_profile_url = "/icons/user.svg"
    }
    if (username === null){
        username = "unknown"
    }
    return (
        <div className="w-[2rem] h-[2rem] rounded-[5px] border-2 border-gray-400">
            <img src={user_profile_url} className="w-full h-full" />
        </div>
    )
}



export default User