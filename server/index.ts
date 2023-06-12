import express, {Express, NextFunction, Request, Response} from 'express';
import morgan from "morgan";
import { marketRouter } from './modules/market/market.route';

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

server.use("/market", marketRouter)

const PORT = 4001;
server.listen(PORT, () => {
    console.log(`Server running here: http://localhost:${PORT}`)
});