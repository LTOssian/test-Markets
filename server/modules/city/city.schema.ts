import z from 'zod';

export const getMarketByCityDto = z.object({
    city: z.string({
        required_error: "The city is required",
        invalid_type_error: "The city's name should be a string"
    }).min(1)
})