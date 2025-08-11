import FieldTag from "../FieldTag";

export default function SchemasDefinition({data=[{"name": "name", "type": "string", "target_schema": null, "primary_key": false, "null": true, "blank": false, "unique": false, "default": null, "deprecated": false, "visible": true, "editable": true, "target_field": null, "target_field_type": null}]}){

    const headerNames = ["Field", "Type", "Properties"]
    let rows = []
    let d = Object.entries(data[0]).filter(([_, v]) => typeof v === "boolean")
    d.forEach((e,i)=>{
        console.log(e[1])
    })
    for (let i = 0; i< data.length;i++){
        let field = data[i]
        let properties = Object.entries(field).filter(([_, v]) => typeof v === "boolean")
        
        let temp = {"Field":field.name, "Type":field.type, "Properties": properties}

        if (field.type === "one_to_one"){
            temp.Properties[`o2o:${field.target_schema}`] = true
        }
        if (field.type === "foreign_key"){
             temp.Properties[`fk:${field.target_schema}`] = true


        }
        if (field.type === "many_to_many"){
            temp.Properties[`m2m:${field.target_schema}`] = true

        }
        rows.push(temp)
        }
        
    return (
        <div className="w-full rounded-md border border-[#D9D9D9]">
            <ul className="flex items-center justify-between py-1 rounded-tl-md rounded-tr-md w-full bg-[#f9f9f9] border border-b-[#D9D9D9]">
                {headerNames.map((name, index)=>(<li key={`${Date.now()}${index}`} className={`text-center font-medium w-1/${headerNames.length}`}>{name}</li>))}
            </ul>
            <ul >
            {rows.map((row, index) => (
            <li
                key={`${Date.now()}${index}`}
                className={`py-1 w-full cursor-pointer text-[13px] hover:text-[#000000] hover:bg-[#f1f1f1] text-[#0000080] flex items-center justify-between text-center font-thin ${
                index === rows.length - 1 ? '' : 'border border-b-[#D9D9D9]'
                }`}
            >
                {headerNames.map((key, ind) => (
                <div
                    key={`${Date.now()}${ind}`}
                    className={`w-1/3`}
                >
                    {key === "Properties" && (<div className="flex items-center justify-between flex-wrap">{
                        row[key].map((property, i)=><FieldTag tag_name={property[0]} is_false={property[1]} />)
                    }</div>)}
                    {key !== "Properties" && row[key]}
                </div>
                ))}
            </li>
            ))}

            </ul>
        </div>
    )
}