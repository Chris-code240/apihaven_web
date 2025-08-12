import SchemasDefinition from "./SchemaDefinition";
import { useParams } from "react-router-dom";

export default function SchemaOverview(){

    return (
            <div className="md:border md:p-2 md:rounded-md border-[#D9D9D9] space-y-3 md:space-y-6">
              <h2 className="text-[22px] font-medium flex items-center space-x-1">{useParams().schemaname} Definition</h2>
            <SchemasDefinition />
        </div>
    )
}