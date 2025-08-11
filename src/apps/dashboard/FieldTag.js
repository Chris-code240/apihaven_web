export default function FieldTag({tag_name, is_false=false}){

    return (
        <diV className={`px-2 rounded-2xl border ${!is_false ? 'border-blue-400':'border-red-400 my-0.5'}`}>
            <p className={`p-1 text-[8px] font-thin ${!is_false ? 'text-blue-700':'text-red-700'}`}>{is_false? 'not ':''}{tag_name}</p>
        </diV>
    )
}