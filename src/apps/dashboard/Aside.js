import AsideLink from "./AsideLink"
export default function Aside(){

    return (
        <aside className="hidden md:block text-start w-[10%] h-screen">
            <div className=" pt-6 space-y-6">
                <AsideLink text={"Projects"} icon={"fidget.svg"} />
                <AsideLink text={"Settings"} icon={"settings.svg"} />
            </div>
        </aside>
    )
}