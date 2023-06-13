import {dataClient} from "../../utils/dbJSON";
import {marketDto} from "../market/market.schema";
import {PlaceType} from "../../interfaces/place_type.enum";

export const fieldService = {
    getMarketByField: async(fieldParam: string): Promise<marketDto[]> => {
        return (await dataClient.getData())
            .filter(market => market.etablissement_type === fieldParam)
    }
}