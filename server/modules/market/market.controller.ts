import {NextFunction, Request, Response} from "express"
import { marketService } from "./market.service"
import {
    createMarketDto,
    createMarketInput,
    deleteMarketDto,
    getMarketByNameDto,
    updateMarketDto,
    updateMarketInput
} from "./market.schema";
import {MarketCreateReq, MarketDeleteReq, MarketNameReq, MarketUpdateReq} from "../../interfaces/request.types";
import {ZodError} from "zod";

export const marketController = {
    getAllMarkets: async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const markets = await marketService.getAllMarkets();

            res.json({
                data: markets
            });
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
            const error: ZodError = new ZodError(result.error.issues);
            error.name = "ValidationError";
            next(error);
        } else {
            req.marketName = result.data.nameInput;
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
                    res.json({ data: markets})
                    : next();
            }
        } catch(e) {
            next(e);
        }
    },

    validateCreateMarketBody: (
        req: MarketCreateReq,
        res: Response,
        next: NextFunction
    ) => {
        const createInput = req.body;
        const result = createMarketDto.safeParse(createInput);

        if (!result.success) {
            const error: ZodError = new ZodError(result.error.issues);
            error.name = "ValidationError";
            next(error);
        } else {
            req.createInput = createInput;
            next();
        }
    },
    createMarket: async (
        req: MarketCreateReq,
        res: Response,
        next: NextFunction
    )=> {
        try {
            const createInput = req.createInput as createMarketInput;
            const market = await marketService.getMarketByName(createInput.etablissement);

            if (!market.length) {
                await marketService.createMarket(createInput);
                res.status(201).json({
                    status: "Success",
                    message: "Market created successfully",
                    data: createInput
                });
            } else {
                const error = new Error("This Market (establishment) already exists");
                error.name = "ConflictError"
                next(error)
            }
        } catch(e) {
            next(e);
        }
    },
    validateIdParam: (
        req: MarketDeleteReq,
        res: Response,
        next: NextFunction
    ) => {
        const id = parseInt(req.params.id, 10);
        const result = deleteMarketDto.safeParse({id: id});

        if (!result.success) {
            const error: ZodError = new ZodError(result.error.issues);
            error.name = "ValidationError";
            next(error);
        } else {
            req.id = result.data.id;
            next();
        }

    },
    deleteMarket: async (
        req: MarketDeleteReq,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const deleteInput = req.id as number;
            const market = await marketService.getMarketById(deleteInput);

            if (market.length) {
                await marketService.deleteMarket(deleteInput);
                res.status(204).json({});
            } else {
                const error = new Error("This Market (id) does not exists");
                error.name = "ConflictError"
                next(error)
            }
        } catch (e) {
            next(e);
        }
    },

    validateUpdateMarketBody: (
        req: MarketUpdateReq,
        res: Response,
        next: NextFunction
    ) => {
        const updateInput = req.body;
        const result = updateMarketDto.safeParse(updateInput);

        if (!result.success) {
            const error: ZodError= new ZodError(result.error.issues);
            error.name = "ValidationError";
            next(error);
        } else {
            req.updateInput = updateInput;
            next();
        }
    },
    updateMarket: async (
        req: MarketUpdateReq,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const updateInput = req.updateInput as updateMarketInput
            const updateId = req.id as number;
            const market = await marketService.getMarketById(updateId);

            if (market.length) {
                await marketService.updateMarket(updateId, updateInput);

                res.json({
                    status: "Success",
                    message: "Market successfully updated"
                })
            } else {
                res.status(409).json({
                    status: "Conflict",
                    message: "This Market (id) does not exists"
                });
            }
        } catch (e) {
            next(e);
        }
    }
}