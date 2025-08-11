import OverviewCard from "./OverviewCard"
import Table from "./Table"
import Back from "../Back"
export default function OverviewMain(){

    return (
            <div className="bg-white  w-full h-full px-6 pt-4 space-y-6">
              <h2 className="text-[22px] font-medium flex items-center space-x-1"><Back /> Your Projects</h2>
              <div className="md:border md:p-2 md:rounded-md border-[#D9D9D9] space-y-3 md:space-y-6">
                <p className="text-[18px] font-medium">Overview</p>
                <div className="flex items-center md:flex-row flex-col md:space-x-6 space-x-0 space-y-6 md:space-y-0">
                  <OverviewCard title={"Total Requests"} value={"26.31M"} trend={{"_value":"156.32%",positive:true}} date={"1 May, 2025"} />
                  <OverviewCard title={"Total Projects"} value={"2"} date={"1 May, 2025"} />
                </div>
              </div>
                <Table />
            </div>
    )
}