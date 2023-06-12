import express, { Router } from "express";
import { marketController } from "./market.controller";

export const marketRouter: Router = express.Router();

marketRouter.get('/', marketController.getAllMarkets)