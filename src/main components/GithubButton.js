const GithubButton = () => {

    return (
        <button className="bg-black md:h-10 rounded-md text-white px-3 py-1 space-x-3">
            <div className="flex items-center space-x-3">
                <div className="w-[1rem] relative">
                    <img src="/icons/new.min.svg" className="w-full z-10" alt="github"/>
                    {/* <span className="absolute top-0 z-0 w-[90%] h-[90%] bg-red-400"></span> */}

                </div>
                <span className="text-bold">Star on GitHub</span>
            </div>
        </button>
    )
}

export default GithubButton