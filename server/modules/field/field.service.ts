import {dataClient} from "../../utils/dbJSON";
import {marketDto} from "../market/market.schema";

export const fieldService = {
    getMarketByField: async(fieldParam: string): Promise<marketDto[]> => {
        return (await dataClient.getData())
            .filter(market => market.etablissement_type === fieldParam)
    }
}