import AppLogo from "../../main components/AppLogo"
export default function LoginPage(){

    function handleSubmit(e){

    }
    return (
        <article className="flex items-center h-screen">
            <div className="hidden md:block w-[50%]">
                <div class="relative w-full h-screen overflow-hidden bg-white">
                <div class="absolute top-[50%] left-[50%] w-full h-full bg">
                    <div class="absolute w-[30vw] h-[30vh] bg-[#ea00ffe7] rounded-full blur-3xl opacity-30 animate-float1"></div>
                    <div class="absolute w-[30vw] h-[30vh] bg-[#00FF73] rounded-full blur-3xl opacity-20 animate-float3"></div>
                </div>
                <div className="container mx-auto w-full h-full px-3">
                    <div class="text-start flex items-start justify-center flex-col w-full h-full">
                        <h1><AppLogo /></h1>
                        <h2 className="text-[32px] font-semibold">Setup your free account in seconds</h2>
                    </div>
                </div>
                </div>

            </div>
            <div className="w-[100%] md:w-[50%] h-full bg-[#181818]">
                <div className="md:w-[50%] w-[90%] mx-auto space-y-12">
                <div>
                    <p className="text-[22px] text-white opacity-[60%]">
                    Create Your Free Account  
                    </p>
                    <p className="text-[18px] text-[#d9d9d9] opacity-[50%]">
                        Connect with:
                    </p>
                </div>
                <div className="w-full space-y-1.5">
                    <button className="bg-white text-black w-full h-[32px] rounded-sm flex items-center justify-center space-x-3">
                        <img src="/icons/google.svg" className="w-[20px] z-10" alt="github"/> <span>Google</span>
                        
                    </button>
                    <button className="bg-white text-black w-full h-[32px] rounded-sm flex items-center justify-center space-x-3">
                        <img src="/icons/new.svg" className="w-[20px] z-10" alt="github"/> <span>GitHub</span>
                    </button>
                </div>
                <div className="relative w-full">
                    <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
                    <div className="email w-[65%] bg-[#181818] text-[#D9D9D9] flex justify-center items-center">
                        Or Continue with Email
                    </div>
                </div>

                <form onSubmit={(e)=>{e.preventDefault()}} className="w-full space-y-1.5">
                    <input type="text" className="focus:outline-none bg-[#181818] border border-solid border-gray-300 text-black w-full h-[32px] rounded-sm flex items-center justify-center space-x-3 px-2" placeholder="example@email.com" />
                    <input type="password" className="focus:outline-none bg-[#181818] border border-solid border-gray-300 text-black w-full h-[32px] rounded-sm flex items-center justify-center space-x-3 px-2" placeholder="A very unique password" />
                    <button type="submit" className="w-full h-[40px] bg-[#D9D9D9] hover:bg-opacity-[30%] flex items-center justify-center font-medium bg-opacity-[60%] rounded-sm text-white">Continue</button>
                </form>
                <div className="text-white">
                    Already have account? <a href="#" className="text-blue-600 active:text-blue-500 visited:text-blue-500">Login</a>
                </div>
                </div>
            </div>
        </article>
    )
}