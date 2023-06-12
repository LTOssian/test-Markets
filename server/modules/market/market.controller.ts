import { Request, Response } from "express"
import { marketService } from "./market.service"

export const marketController = {
    getAllMarkets: async (
        req: Request,
        res: Response
    ) => {
        try {
            res.json({
                data: await marketService.getAllMarkets()
            })
        } catch(e) {
            res.status(502).json({
                state: "Imported JSON Error",
                error: e
            })
        }
    }
}