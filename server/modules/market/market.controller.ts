import {NextFunction, Request, Response} from "express"
import { marketService } from "./market.service"
import {getMarketByNameDto} from "./market.schema";
import {MarketNameReq} from "../../interfaces/request.types";

export const marketController = {
    getAllMarkets: async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {

            const markets = await marketService.getAllMarkets();

            res.json({
                data: markets.map(({id, ...rest}) => rest)
            })
        } catch(e) {
            next(e);
        }
    },
    validateNameParam: (
        req: MarketNameReq,
        res: Response,
        next: NextFunction
    ) => {
        const name = req.params.name;
        const result = getMarketByNameDto.safeParse({nameInput: name});

        if (!result.success) {
            res.status(409).json({
                'status': 'Bad request',
                'message': result.error.issues
            });
        } else {
            req.marketName = name
            next();
        }
    },
    getMarketByName: async (
        req: MarketNameReq,
        res: Response,
        next: NextFunction
    ) => {
        try {
            if (req.marketName) {
                const markets = await marketService.getMarketByName(req.marketName);
                markets.length ?
                    res.json({ data: markets.map(({id, ...rest}) => rest) })
                    : next();
            }
        } catch(e) {
            next(e);
        }
    }
}