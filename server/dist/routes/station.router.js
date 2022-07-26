"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Station_controller_1 = __importDefault(require("../controllers/Station.controller"));
var stationRouter = (0, express_1.Router)();
stationRouter.get('/', Station_controller_1.default.getAll);
stationRouter.post('/create', Station_controller_1.default.create);
stationRouter.patch('/update/:stationId', Station_controller_1.default.update);
stationRouter.delete('/delete/:stationId', Station_controller_1.default.delete);
exports.default = stationRouter;
