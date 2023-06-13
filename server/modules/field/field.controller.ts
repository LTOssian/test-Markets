import { NextFunction, Response } from "express"
import { fieldService } from "./field.service";
import { ZodError } from "zod";
import { getMarketByFieldDto } from "./field.schema";
import { FieldReq } from "../../interfaces/request.types";

export const fieldController = {
    validateFieldParam: async (
        req: FieldReq,
        res: Response,
        next: NextFunction
    ) => {
        const field = req.params.field;
        const result = getMarketByFieldDto.safeParse({field: field});

        if (!result.success) {
            const error: ZodError = new ZodError(result.error.issues);
            error.name = "ValidationError";
            next(error);
        } else {
            req.field = result.data.field;
            next();
        }
    },
    getMarketByField: async(
        req: FieldReq,
        res: Response,
        next: NextFunction
    ) => {
        try {
            if (req.field) {
                const fieldMarkets = await fieldService.getMarketByField(req.field);
                res.json({
                    data: fieldMarkets
                })
            }
        } catch (e) {
            next(e)
        }
    }
}