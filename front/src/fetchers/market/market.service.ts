import axios from "axios";

const baseMarketUrl = 'http://localhost:4001/api/market';

export const marketService = {
    useDelete: (id: number) => {
        return axios.delete(baseMarketUrl + "/" + id);
    },
    useMarkets: () => {
        return axios.get(baseMarketUrl + "/all");
    }
}