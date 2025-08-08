export default function OverviewCard({title,value, date,trend={"positive":false, _value:""}}){

    return (
                <div className="md:w-1/3 w-full h-[7rem] hover:bg-[#fbfbfb] border border-[#D9D9D9] rounded-md">
                  <div className="space-y-6 p-6">
                    <div className="flex items-center justify-between">
                      <p className="opacity-60">{title}</p>
                      <div className="flex items-center space-x-1.5 text-[12px] font-medium">
                        {trend.positive === true && (<span className="text-green-600">&uarr;</span>)}
                        {trend.positive === false && trend._value !== "" && (<span className="text-red-600 rotate-180">&darr;</span>)}
                        <p>{trend._value}</p>
                      </div>

                    </div>
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-[22px]">{value}</p><span className="opacity-60">since {date}</span>
                      </div>
                  </div>
                </div>
    )

}