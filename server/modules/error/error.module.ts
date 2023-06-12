import {NextFunction, Request, Response} from "express";

export const ErrorModule = {
    genericError: (
        error: Error,
        req: Request,
        res: Response
    ) => {
        console.error(error)
        res.status(500).json({
            error: "JSON Error"
        })
    },
    notFoundError: (
        req: Request,
        res: Response
    ) => {
        res.status(404).json({
            error: 'Data Not Found'
        });
    },
    validationError:(
        error: Error,
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        if (error.name === 'ValidationError') {
            res.status(409).json({
                status: 'Bad request',
                message: JSON.parse(error.message)
            })
        } else {
            next(error);
        }
    }
}