"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Tank_controller_1 = __importDefault(require("../controllers/Tank.controller"));
var tanksRouter = (0, express_1.Router)();
tanksRouter.get('/', Tank_controller_1.default.getAll);
tanksRouter.post('/create', Tank_controller_1.default.create);
exports.default = tanksRouter;
