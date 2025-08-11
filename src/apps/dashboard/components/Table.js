import { Link } from "react-router-dom"
export default function Table({data={"Name":['apihaven','scrapp'], "Created at":["1 May, 2025", "1 May, 2025"], "Database":["Postgres","Postgres"], "Status":["Active", "Active"]}}){

    const headerNames = Object.keys(data)
    const values = Object.values(data)
    let rows = []
    // Lets find out if all

    for (let index = 0; index < values[0]?.length; index++) {
        let temp = []
        for (let j  = 0; j<values.length; j++ ){
            temp.push(values[j][index])
        }
        rows.push(temp)
        }
    return (
        <div className="w-full rounded-md border border-[#D9D9D9]">
            {/*  Header */}
            <ul className="flex items-center justify-between py-1 rounded-tl-md rounded-tr-md w-full bg-[#f9f9f9] border border-b-[#D9D9D9]">
                {headerNames.map((name, index)=>(<li key={`${Date.now()}${index}`} className={`text-center font-medium w-1/${headerNames.length}`}>{name}</li>))}
            </ul>
            <ul >
                {rows.map((row, index)=>(
                 <Link key={`${Date.now()}${index}`} to={`/dashboard/projects/${row[0]}`}>   <li key={`${Date.now()}${index}`} className={`py-1 w-full cursor-pointer text-[13px] hover:text-[#000000] hover:bg-[#f1f1f1] text-[#0000080] flex items-center justify-between text-center font-thin ${index === rows.length -1 ? '' : 'border border-b-[#D9D9D9]'}`}>{
                    row.map((value, ind)=>(<div key={`${Date.now()}${ind}`} className={`w-1/${headerNames.length}`}>{value}</div>))
                }</li>
                </Link>
                ))}
            </ul>
        </div>
    )
}