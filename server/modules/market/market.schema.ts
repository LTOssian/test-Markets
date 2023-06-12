import z from 'zod';

const marketCoreDto = ({
    etablissement_type: z.string({}).min(1),
    etablissement: z.string({}).min(1),
    location: z.string({}).min(1),
    address: z.string({}).min(1),
    mail: z.string({}).email()
}) 

export const createMarketDto = z.object({
    ...marketCoreDto,
    id: z.number()
})

export const marketDto = z.object({
    ...marketCoreDto
})

export type createMarketInput = z.infer<typeof createMarketDto>;
export type marketDto = z.infer<typeof marketDto>;