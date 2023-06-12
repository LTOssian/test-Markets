import express, {Express, NextFunction, Request, Response} from 'express';
import morgan from "morgan";
import { marketRouter } from './modules/market/market.route';
import {ErrorModule} from "./modules/error/error.module";

const server: Express = express();

server.use(morgan("dev"));
server.use(express.urlencoded({
    extended: true
}));
server.use(express.json());
server.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Content-Type", "application/json");
    next();
})

// Endpoints handlers
server.use("/api/market", marketRouter)

// Error handlers
server.use(ErrorModule.notFoundError)
server.use(ErrorModule.validationError)
server.use(ErrorModule.genericError)

const PORT = 4001;
server.listen(PORT, () => {
    console.log(`Server running here: http://localhost:${PORT}`)
});