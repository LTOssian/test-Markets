import z from 'zod';
import { PlaceType } from "../../interfaces/place_type.enum";

export const getMarketByFieldDto = z.object({
    field: z.nativeEnum(PlaceType)
})