import z from 'zod';
import {PlaceType} from "../../interfaces/place_type.enum";

const marketCoreDto = {
    etablissement_type: z.nativeEnum(PlaceType),
    etablissement: z.string({}).min(1),
    location: z.string({}).min(1),
    address: z.string({}).min(1),
    mail: z.string({}).email().min(1)
}

export const marketDto = z.object({
    ...marketCoreDto,
    id: z.number()
})

export const getMarketByNameDto= z.object({
    nameInput: z.string({
        required_error: "The name of the establishment is required",
        invalid_type_error: "The name should be a string"
    }).min(1)
})

export const createMarketDto = z.object({
    ...marketCoreDto
})

export const deleteMarketDto = z.object({
    id: z.number()
})

export const updateMarketDto = z.object({
    ...marketCoreDto
})

export type createMarketInput = z.infer<typeof createMarketDto>;
export type updateMarketInput = z.infer<typeof updateMarketDto>;
export type marketDto = z.infer<typeof marketDto>;
