import {dataClient} from "../../utils/dbJSON";
import { marketDto } from "../market/market.schema";

export const cityService = {
    getMarketByCity: async (cityParam: string): Promise<marketDto[]> => {
        return (await dataClient.getData())
            .filter(market => market.location === cityParam)
    }
}