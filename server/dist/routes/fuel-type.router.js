"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var FuelType_controller_1 = __importDefault(require("../controllers/FuelType.controller"));
var fuelTypeRouter = (0, express_1.Router)();
fuelTypeRouter.get('/', FuelType_controller_1.default.getAll);
fuelTypeRouter.get('/:id', FuelType_controller_1.default.getFuelType);
