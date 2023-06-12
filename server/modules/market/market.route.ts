import express, { Router } from "express";
import { marketController } from "./market.controller";

export const marketRouter: Router = express.Router();
marketRouter.param("name", marketController.validateNameParam);
marketRouter.param("id", marketController.validateIdParam);

marketRouter.get('/all', marketController.getAllMarkets);
marketRouter.get('/:name', marketController.getMarketByName);
marketRouter.post('/', marketController.validateCreateMarketBody, marketController.createMarket);
marketRouter.delete('/:id', marketController.deleteMarket)