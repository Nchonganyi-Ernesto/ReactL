import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function According() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected((prevSelected) => (prevSelected === getCurrentId ? null : getCurrentId));
    }

    function handleMultiSelection(getCurrentId) {
        setMultiple((prevMultiple) =>
            prevMultiple.includes(getCurrentId)
                ? prevMultiple.filter((id) => id !== getCurrentId)
                : [...prevMultiple, getCurrentId]
        );
    }

    return (
        <div className="wrapper">
            <button
                onClick={() => {
                    setEnableMultiSelection((prev) => !prev);
                    setSelected(null);
                    setMultiple([]);
                }}
            >
                {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
            </button>
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem) => {
                        const isOpen = enableMultiSelection
                            ? multiple.includes(dataItem.id)
                            : selected === dataItem.id;

                        return (
                            <div key={dataItem.id} className="Item">
                                <div
                                    onClick={() =>
                                        enableMultiSelection
                                            ? handleMultiSelection(dataItem.id)
                                            : handleSingleSelection(dataItem.id)
                                    }
                                    className="title"
                                >
                                    <h3>{dataItem.title}</h3>
                                    <span>+</span>
                                </div>

                                {isOpen ? <div className="content">{dataItem.description}</div> : null}
                            </div>
                        );
                    })
                ) : (
                    <div>no data found</div>
                )}
            </div>
        </div>
    );
}