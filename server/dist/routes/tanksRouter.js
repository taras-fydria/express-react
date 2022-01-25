"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tanksController_1 = __importDefault(require("../controllers/tanksController"));
var tanksRouter = (0, express_1.Router)();
tanksRouter.get('/', tanksController_1.default.getAll);
exports.default = tanksRouter;
