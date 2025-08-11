import OverviewCard from "./components/OverviewCard";
import { useParams } from "react-router-dom"
import SchemasTable from "./components/SchemasTable";
import { Outlet } from "react-router-dom";
import Back from "./Back";
export default function ProjectOverview({schemas={}}){
    let params = useParams();
    return (
            <div className="bg-white  w-full h-full px-6 pt-4 space-y-6">
              <h2 className="text-[22px] font-medium flex items-center space-x-1"><Back /><span className="opacity-60">Your Projects/</span>{params.projectname}</h2>
              <div className="md:border md:p-2 md:rounded-md border-[#D9D9D9] space-y-3 md:space-y-6">
                <p className="text-[18px] font-medium">Overview</p>
                <div className="flex items-center md:flex-row flex-col md:space-x-6 space-x-0 space-y-6 md:space-y-0">
                  <OverviewCard title={"Total Requests"} value={"26.31M"} trend={{"_value":"156.32%",positive:true}} date={"1 May, 2025"} />
                  <OverviewCard title={"Total Projects"} value={"2"} date={"1 May, 2025"} />
                </div>
              </div>
              <div className="md:border md:p-2 md:rounded-md border-[#D9D9D9] space-y-3 md:space-y-6">
                <p className="text-[18px] font-medium">Schemas</p>
                <SchemasTable data={{"Name":['user','post'], "Created at":["1 May, 2025", "1 May, 2025"], "Status":["Active", "Active"]}} project_name={params.projectname} />
              </div>
            <Outlet />
            </div>
    )
}