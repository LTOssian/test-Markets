import { MarketDto } from "./market.dto";
import axios from "axios";

const baseMarketUrl = 'http://localhost:4001/api/market';
export const marketService = {
    useMarkets: async (): Promise<MarketDto> => {
        return await axios.get(baseMarketUrl + "/all");
    },
    useName: (name: string) => {

    },
    useCreate: (createMarketDto: MarketDto) => {

    },
    useDelete: async (id: number) => {
        return await axios.delete(baseMarketUrl + "/" + id);
    },
    useUpdate: (updateMarketDto: MarketDto) => {

    }
}