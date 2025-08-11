import { useNavigate } from "react-router-dom"
export default function Back(){
    const navigation = useNavigate()
    function goBack(){
        navigation(-1)
    }
    return (
              <div onClick={(e)=>{goBack()}} className="cursor-pointer rounded-md p-1">&larr;</div>
    )
}