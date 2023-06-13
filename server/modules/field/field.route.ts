import express, { Router } from "express";
import { fieldController } from "./field.controller";

export const fieldRouter: Router = express.Router();
fieldRouter.param("field", fieldController.validateFieldParam);

fieldRouter.get("/", fieldController.validateFieldQuery, fieldController.getMarketByCityByField);
fieldRouter.get("/:field", fieldController.getMarketByField);
