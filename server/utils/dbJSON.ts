import { readFile } from "fs";
import { promisify } from "util";
import { PlaceDto } from "../interfaces/place.dto";
import {createMarketInput} from "../modules/market/market.schema";

const asyncReadFile = promisify(readFile);

class DataJson {
    private data: Set<PlaceDto>;
    constructor() {
        this.data = new Set<PlaceDto>();
        this.loadJSON();
    }

    async getData() {
        return Array.from(this.data);
    }

    private async loadJSON() {
        try  {
            const file = await asyncReadFile("./utils/MOCK_DATA.json", "utf-8");
            this.data = new Set(JSON.parse(file));
        } catch(e) {
            console.error(e)
            throw new Error("Failed to load JSON file");
        }
    }

    async addRow(row: createMarketInput) {
        const dataCopy = (await this.getData())
        const id = dataCopy?.pop()?.id ?? 0
        this.data.add({id, ...row});
    }

    async removeRow(rowId: number) {
        const row = (await this.getData()).filter(({ id}) => rowId == id);
        this.data.delete(row[0]);
    }
}

export const dataClient = new DataJson();