import {PlaceType} from "./place_type.enum";

export interface PlaceDto {
    id: number,
    etablissement_type: PlaceType,
    etablissement: string,
    location: string,
    address: string,
    mail: string
}
