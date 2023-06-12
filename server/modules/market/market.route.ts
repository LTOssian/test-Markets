import express, { Router } from "express";
import { marketController } from "./market.controller";

export const marketRouter: Router = express.Router();
marketRouter.param("name", marketController.validateNameParam);

marketRouter.get('/all', marketController.getAllMarkets);
marketRouter.get('/:name', marketController.getMarketByName);
marketRouter.post('/', marketController.validateCreateMarketBody, marketController.createMarket);