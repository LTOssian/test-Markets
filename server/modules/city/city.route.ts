import express, {Router} from "express";
import {cityController} from "./city.controller";

export const cityRouter: Router = express.Router();
cityRouter.param("city", cityController.validateCityParam);

cityRouter.get("/:city", cityController.getMarketByName);