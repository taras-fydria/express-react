"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var StationController_1 = __importDefault(require("../controllers/StationController"));
var stationRouter = (0, express_1.Router)();
stationRouter.get('/', StationController_1.default.getAll);
stationRouter.post('/create', StationController_1.default.create);
exports.default = stationRouter;
