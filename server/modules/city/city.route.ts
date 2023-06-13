import express, {Router} from "express";
import {cityController} from "./city.controller";
import {fieldRouter} from "../field/field.route";

export const cityRouter: Router = express.Router();
cityRouter.use("/:city/field", fieldRouter);
cityRouter.param("city", cityController.validateCityParam);

cityRouter.get("/:city", cityController.getMarketByName);