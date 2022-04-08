import { useState } from "react"
import IDetail from "../models/Details";
import Hotels from "../models/Hotels";
import Api from "../services/Api";

const useSelectedItem = () => {
    const [selectedItem, setSelectedItem]= useState<IDetail>();

    const fetchSelected = (item: Hotels): Promise<IDetail>  => {
        return new Promise((resolve) => {
            Api.getDetails(item.complex_slug).then((data) => {                
                setSelectedItem(data);
                resolve(data);
            })
        })
    }

    return {selectedItem, fetchSelected}
}

export default useSelectedItem;