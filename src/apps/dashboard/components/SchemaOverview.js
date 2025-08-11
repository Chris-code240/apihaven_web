import SchemasDefinition from "./SchemaDefinition";

export default function SchemaOverview(){

    return (
        <div>
            <SchemasDefinition data={[{"name": "name", "type": "string", "target_schema": null, "primary_key": false, "null": true, "blank": false, "unique": false, "default": null, "deprecated": false, "visible": true, "editable": true, "target_field": null, "target_field_type": null}]} />
        </div>
    )
}