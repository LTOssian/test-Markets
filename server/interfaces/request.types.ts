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
    id ?: number
    updateInput ?: {
        etablissement_type: string;
        etablissement: string;
        location: string;
        address: string;
        mail: string;
    }
}

export interface CityReq extends Request {
    city ?: string;
}

export interface FieldReq extends Request {
    field ?: string;
}

export interface MergeMarketCityByField extends Request {
    city ?: string;
    f ?: string;
}

export interface MarketPageReq extends Request {
    pagination ?: string;
}