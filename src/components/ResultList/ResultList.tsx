import React from "react";
import Hotels from "../../models/Hotels";

interface Props {
    data: Hotels[],
    onSelectItem: (hotel: Hotels) => void;
}
const ResultList = ({data, onSelectItem}: Props) => {
    const renderedData = data.map((item) => {
            return (
                <div key={item.id} onClick={() => onSelectItem(item)}>{item.title}</div>
            )
        })
    
    return (
        <div>{renderedData}</div>
    )
}

export default ResultList;