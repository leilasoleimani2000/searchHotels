import { useState } from "react";
import Hotels from "../models/Hotels";
import Api from "../services/Api";

const useFetchData = () => {
    const [data, setData] = useState<Hotels[]>([]);

    const fetchData = (term:string):Promise<boolean> => {
        return new Promise((resolve) => {
            Api.getData(term).then((data) => {
                setData(data);
                resolve(true);
            });
            
        })
    }

    const clearData = () => {
        setData([]);
      };

      return { data, fetchData, clearData };
}

export default useFetchData;