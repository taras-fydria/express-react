"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var FuelTypeController_1 = __importDefault(require("../controllers/FuelTypeController"));
var fuelTypeRouter = (0, express_1.Router)();
fuelTypeRouter.get('/', FuelTypeController_1.default.getAll);
fuelTypeRouter.get('/:id', FuelTypeController_1.default.getFuelType);
