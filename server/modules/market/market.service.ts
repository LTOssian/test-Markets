import {dataClient} from "../../utils/dbJSON";
import {createMarketDto, createMarketInput, marketDto} from "./market.schema";

export const marketService = {
    getAllMarkets: async (): Promise<marketDto[]> => {
        return await dataClient.getData();
    },
    // getMarketById: async (idInput: number): Promise<marketDto[]> => {
    //     return dataClient.data.filter(market => market.id === idInput)
    // },
    getMarketByName: async (nameInput: string): Promise<marketDto[]> => {
        return (await dataClient.getData()).filter(market => market.etablissement.toLowerCase() === nameInput.toLowerCase());
    },

    createMarket: async (createInput: createMarketInput)=> {
        return (await dataClient.addRow(createInput));
    }

}