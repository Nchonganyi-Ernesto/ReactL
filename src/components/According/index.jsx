import { useState } from "react"
import data from "./data";

export default function According(){
    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId){
       console.log(getCurrentId)
    }

    return (
    <div className="wrapper">
        <div className="accordian">
            {
                data && data.length > 0 ?
                data.map(dataItem=> <div className="Item">
                    <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.title}</h3>
                        <span>+</span>

                    </div>
                     </div>)
                
                : <div>no data found</div>
            }
        </div>
        
    </div>
    )
}