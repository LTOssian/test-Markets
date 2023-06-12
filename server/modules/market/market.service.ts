import {dataClient} from "../../utils/dbJSON";
import {createMarketInput, marketDto, updateMarketInput} from "./market.schema";

export const marketService = {
    getAllMarkets: async (): Promise<marketDto[]> => {
        return await dataClient.getData();
    },
    getMarketById: async (idInput: number): Promise<marketDto[]> => {
        return (await dataClient.getData())
            .filter(market => market.id === idInput)
    },
    getMarketByName: async (nameInput: string): Promise<marketDto[]> => {
        return (await dataClient.getData())
            .filter(market => market.etablissement.toLowerCase() === nameInput.toLowerCase());
    },

    createMarket: async (createInput: createMarketInput)=> {
        return (await dataClient.addRow(createInput));
    },

    deleteMarket: async (id: number) => {
        return (await dataClient.removeRow(id));
    },

    updateMarket: async (id: number, updateInput: updateMarketInput) => {
        return (await dataClient.updateRow(id, updateInput))
    }
}