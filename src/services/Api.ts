import IDetail from "../models/Details";
import Hotels from "../models/Hotels";

const API_ENDPOINT = "https://napi.snapproom.com";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async getData(query: string): Promise<Hotels[]> {
        let response = await fetch(
          `${API_ENDPOINT}/search?${query ? `query=${query}` : ""}&dorm=false`
        ).then((res) => res.json());
    
        return response.data;
      },

      async getDetails(query: string): Promise<IDetail> {
        let response = await fetch(
          `${API_ENDPOINT}/complexes/${query ? `${query}` : ""}`
        ).then((res) => res.json());
    
        return response.data;
      },
}