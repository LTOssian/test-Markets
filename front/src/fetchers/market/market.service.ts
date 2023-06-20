import axios from "axios";
import {MarketDto} from "../market.dto";
const baseMarketUrl = 'http://localhost:4001/api/market';

export const marketService = {
    useDelete: (id: number) => {
        return axios.delete(baseMarketUrl + "/" + id);
    },
    useMarkets: (): Promise<MarketDto> => {
        return axios.get(baseMarketUrl + "/all");
    }
}