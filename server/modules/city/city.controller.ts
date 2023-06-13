import { NextFunction, Response } from "express"
import { cityService } from "./city.service";
import { CityReq } from "../../interfaces/request.types";
import {getMarketByCityDto} from "./city.schema";
import {ZodError} from "zod";
import { toCapitalizeHelpers} from "../../helpers/capitalize.helpers";

export const cityController = {
    validateCityParam: (
        req: CityReq,
        res: Response,
        next: NextFunction
    ) => {
        const city = toCapitalizeHelpers(req.params.city);
        const result = getMarketByCityDto.safeParse({ city: city });

        if (!result.success) {
            const error: ZodError = new ZodError(result.error.issues);
            error.name = "ValidationError";
            next(error);
        } else {
            req.city = result.data.city;
            next();
        }
    },
    getMarketByName: async (
        req: CityReq,
        res: Response,
        next: NextFunction
    ) => {
        try {
            if (req.city) {
                const cityMarkets = await cityService.getMarketByCity(req.city);
                cityMarkets.length ?
                    res.json({ data: cityMarkets })
                    : next();
            }
        } catch (e) {
            next(e);
        }
    }
}