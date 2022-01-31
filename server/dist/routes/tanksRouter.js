"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TankController_1 = __importDefault(require("../controllers/TankController"));
var tanksRouter = (0, express_1.Router)();
tanksRouter.get('/', TankController_1.default.getAll);
tanksRouter.post('/create', TankController_1.default.create);
exports.default = tanksRouter;
