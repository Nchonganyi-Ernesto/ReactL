import { useState } from "react"
import data from "./data";
import "./styles.css";

export default function According(){
    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId){
        setSelected((prevSelected) => (prevSelected === getCurrentId ? null : getCurrentId));
    }

    return (
    <div className="wrapper">
        <div className="accordian">
            {
                data && data.length > 0 ?
                data.map((dataItem) => (
                    <div key={dataItem.id} className="Item">
                        <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.title}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItem.id ? (
                                <div className="content">
                                    {dataItem.description}
                                </div>
                            ) : null
                        }
                    </div>
                ))
                : <div>no data found</div>
            }
        </div>
    </div>
    )
}