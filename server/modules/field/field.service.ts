import {dataClient} from "../../utils/dbJSON";
import {marketDto} from "../market/market.schema";

export const fieldService = {
    getMarketByField: async(fieldParam: string): Promise<marketDto[]> => {
        return (await dataClient.getData())
            .filter(market => market.etablissement_type === fieldParam)
    },

    getMarketByCityByField: async(fieldQuery: string, cityParam: string): Promise<marketDto[]> => {
        return (await dataClient.getData())
            .filter((market) => {
                return (market.etablissement_type === fieldQuery && market.location === cityParam)
            })
    }
}