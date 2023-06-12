import { readFile } from "fs";
import { promisify } from "util";
import { PlaceDto } from "../interfaces/place.dto";

const asyncReadFile = promisify(readFile);

class DataJson {
    data: PlaceDto[];
    constructor() {
        this.data = [];
        this.loadJSON();
    }

    async loadJSON() {
        try  {
            const file = await asyncReadFile("./utils/MOCK_DATA.json", "utf-8");
            this.data = JSON.parse(file);
        } catch(e) {
            console.error(e)
            throw new Error("Failed to load JSON file");
        }
    }
}

export const dataClient = new DataJson();