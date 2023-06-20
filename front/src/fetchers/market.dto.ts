import {PlaceType} from "../utils/place_type.enum";
export interface MarketDto {
    data: {
        id: number,
        etablissement_type: PlaceType,
        etablissement: string,
        location: string,
        address: string,
        mail: string
    }[]
}