import {dataClient} from "../../utils/dbJSON";
import {marketDto} from "./market.schema";

export const marketService = {
    getAllMarkets: async (): Promise<marketDto[]> => {
        return dataClient.data;
    },
    // getMarketById: async (idInput: number): Promise<marketDto[]> => {
    //     return dataClient.data.filter(market => market.id === idInput)
    // },
    getMarketByName: async (nameInput: string): Promise<marketDto[]> => {
        return dataClient.data.filter(market => market.etablissement.toLowerCase() === nameInput.toLowerCase())
    }
}