"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var station_router_1 = __importDefault(require("./station.router"));
var tanks_router_1 = __importDefault(require("./tanks.router"));
var AppRouter = (0, express_1.Router)();
AppRouter.use('/stations', station_router_1.default);
AppRouter.use('/tanks', tanks_router_1.default);
AppRouter.use('/fuel-types', tanks_router_1.default);
exports.default = AppRouter;
