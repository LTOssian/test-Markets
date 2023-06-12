import { Request } from "express";

export interface MarketNameReq extends Request {
    marketName ?: string;
}

export interface MarketCreateReq extends Request {
    createInput ?: {
        etablissement_type: string;
        etablissement: string;
        location: string;
        address: string;
        mail: string;
    }
}

export interface MarketDeleteReq extends Request {
    id ?: number;
}

export interface MarketUpdateReq extends Request {
    updateInput ?: {
        etablissement_type: string;
        etablissement: string;
        location: string;
        address: string;
        mail: string;
    }
}