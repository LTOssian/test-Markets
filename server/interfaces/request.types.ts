import { Request } from "express";

export interface MarketNameReq extends Request {
    marketName ?: string;
}