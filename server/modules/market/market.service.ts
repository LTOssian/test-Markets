import { dataClient } from "../../utils/dbJSON";
import { marketDto } from "./market.schema";

export const marketService = {
    getAllMarkets: async (): Promise<marketDto[]> => {
        return dataClient.data;
    } 
}