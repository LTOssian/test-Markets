import { NextFunction, Response } from "express"
import { fieldService } from "./field.service";
import { ZodError } from "zod";
import { getMarketByFieldDto } from "./field.schema";
import { FieldReq, MergeMarketCityByField } from "../../interfaces/request.types";
import { toCapitalizeHelpers } from "../../helpers/capitalize.helpers";

export const fieldController = {
    validateFieldParam: async (
        req: FieldReq,
        res: Response,
        next: NextFunction
    ) => {
        const field = toCapitalizeHelpers(req.params.field)
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
    },

    validateFieldQuery: async (
        req: MergeMarketCityByField,
        res: Response,
        next: NextFunction
    ) => {
        if (req.query.f) {
            req.f = req.query.f as string;
            next();
        } else {
            const error = new Error('"The f (field) query is undefined."')
            error.name = "ValidationError";
            return next(error)
        }
    },
    getMarketByCityByField: async (
        req: MergeMarketCityByField,
        res: Response,
        next: NextFunction
    ) => {
        try {

            if (req.f && req.city) {
                const fieldQuery = toCapitalizeHelpers(req.f);
                const cityParam = toCapitalizeHelpers(req.city);
                const cityByFieldMarkets = await fieldService.getMarketByCityByField(fieldQuery, cityParam);

                res.json({
                    data: cityByFieldMarkets
                })
            }
        } catch (e) {
            next(e)
        }

    }
}