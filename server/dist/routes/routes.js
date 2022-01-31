"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var stationRouter_1 = __importDefault(require("./stationRouter"));
var tanksRouter_1 = __importDefault(require("./tanksRouter"));
var AppRouter = (0, express_1.Router)();
AppRouter.use('/stations', stationRouter_1.default);
AppRouter.use('/tanks', tanksRouter_1.default);
AppRouter.use('/fuel-types', tanksRouter_1.default);
exports.default = AppRouter;
