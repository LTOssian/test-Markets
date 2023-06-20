import axios from "axios";
import {MarketDto} from "../market.dto";
import {PlaceType} from "../../utils/place_type.enum";
const baseMarketUrl = 'http://localhost:4001/api/field';

export const fieldService = {
    useField: (field: string): Promise<MarketDto> => {
        return axios.get(baseMarketUrl + "/" + field);
    }
}