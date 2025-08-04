import { Link } from 'react-router-dom';

function LandingPageMain(){

        return (
            <main className="container mx-auto space-y-6 md:space-y-0 mt-[10vh] md:mt-0">
                <article className="flex flex-col items-center space-y-9 md:justify-evenly md:h-screen h-auto md:space-y-25">
                    <div className="self-center p-1 px-2 rounded-xl md:text-[18px] text-[12px] text-center md:text-auto bg-white shadow-md md:w-[40vw]">
                        <p>🎉 | Relaiable, Secure, User control RESTful API Development</p>
                    </div>
                    <div className="space-y-3 px-6 md:px-auto">
                        <h2 className="md:text-6xl text-[32px] font-bold text-start md:text-center">Ship Faster with No-Code RESTful API</h2>
                        <p className="text-[#00000060] text-start md:text-center">Trusted by developers, developed around developer needs, architectured to ease development process</p>
                    </div>
                    <div className="space-x-3 font-medium">
                        <Link to="dashboard">
                            <button className="md:w-[10rem] md:h-[4rem] w-[7rem] h-[3rem] rounded-full bg-black text-white">
                                Start for Free
                            </button>
                        </Link>
                        <button className="md:w-[10rem] w-[7rem] h-[3rem] md:h-[4rem] rounded-full bg-black bg-opacity-[5%] text-black">
                            Talk to us&rarr;
                        </button>
                    </div>
                </article>
                <article className="flex flex-col items-center md:space-y-[59px] space-y-[39px] my-9 md:my-0">
                        <div className=" flex items-center justify-center bg-[#D9D9D9] bg-opacity-[30%] text-[16px] h-[37px] w-[211px] rounded-full font-medium"><p className="opacity-[100%]">why choose us?</p></div>
                        <h3 className="text-[48px] font-medium">Developer Centered</h3>
                        <p className="max-w-[48rem] text-start text-[#00000060]  md:text-[22px] px-6 md:px-0">This project is built for developers to ship faster. Leveraging Django Rest Framework, APIHaven 
                            ensures maximum security againts your data.
                        </p>
                        <div className="flex items-center flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
                            <div className="relative my-6 flex justify-center items-center card w-[345px] h-[215px] shadow-xl rounded-lg bg-white overflow-hidden">
                                <div className="absolute -right-6 -top-6 w-[100px] h-[100px] bg-purple-300 rounded-full"></div>
                                <div className="px-3 space-y-3">
                                    <div className="w-10 h-10">
                                        <img src="/icons/thunderbolt-colored.svg" className="" alt="thunderbolt" />
                                    </div>
                                    <p className="font-semibold text-start">DRF Based API</p>
                                    <p className="text-[#00000060] text-start text-[16px]">
                                    Developers get clean, Django Rest Framework security protected endpoints </p>
                                </div>
                            </div>
                            <div className="relative my-6 flex justify-center items-center card w-[345px] h-[215px] shadow-xl rounded-lg bg-white overflow-hidden">
                                <div className="absolute -right-6 -top-6 w-[100px] h-[100px] bg-[#000BE2] opacity-[15%] rounded-full"></div>
                                <div className="px-3 space-y-3">
                                    <div className="w-10 h-10">
                                        <img src="/icons/multi-apps-colored.svg" className="" alt="multi apps" />
                                    </div>
                                    <p className="font-semibold text-start">Multi Tenancy</p>
                                    <p className="text-[#00000060] text-start text-[16px]">
                                    Developed with database-per-project in mind, developers can ship multiple projects without clustered database. </p>
                                </div>
                            </div>
                            <div className="relative my-6 flex justify-center items-center card w-[345px] h-[215px] shadow-xl rounded-lg bg-white overflow-hidden">
                                <div className="absolute -right-6 -top-6 w-[100px] h-[100px] bg-[#00FF73] opacity-[15%] rounded-full"></div>
                                <div className="px-3 space-y-3">
                                    <div className="w-10 h-10">
                                        <img src="/icons/open-source-colored.svg" className="opacity-[100%]" alt="code" />
                                    </div>
                                    <p className="font-semibold text-start">DRF Based API</p>
                                    <p className="text-[#00000060] text-start text-[16px]">
                                    Developers get clean, Django Rest Framework security protected endpoints </p>
                                </div>
                            </div>
                        </div>
                </article>
                <article className="md:flex items-center justify-between">
                    <div className="flex flex-col md:justify-start justify-center space-y-[30px] max-w-[418px] px-6 md:px-auto">
                        <div className="self-center md:self-auto flex items-center justify-center bg-[#FB00FF] text-[#B404B7] bg-opacity-[10%] text-[16px] h-[37px] w-[211px] rounded-full font-medium"><p className="opacity-[100%]">modern architecture</p></div>

                        <p className="md:text-[48px] text-[38px] font-bold text-left">Build RESTful API in record time</p>
                        <p className="text-start max-w-[392px]">
                            Focus on your frontend, not on reinventing API business logics. APIHaven is designed to be accessible, customizable, and work seamlessly with  your frontend.
                        </p>
                        <img className="block md:hidden w-[480px]" src="/assets/code.png" alt="code snippet" />

                        <button className="self-center md:self-auto w-[10rem] h-[4rem] font-medium rounded-full bg-black text-white">
                            Start for Free
                        </button>
                    </div>
                    <img className="w-[778px] hidden md:block" src="/assets/code.png" alt="code snippet" />
                </article>
            </main>
        )
}

export default LandingPageMain