"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Station_1 = require("./entity/Station");
var Tank_1 = __importDefault(require("./entity/Tank"));
var FuelType_1 = __importDefault(require("./entity/FuelType"));
var connectionOptions = {
    name: 'default',
    type: 'postgres',
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: Number(process.env.DB_PORT),
    entities: [Station_1.Station, Tank_1.default, FuelType_1.default],
    synchronize: true,
    ssl: !process.env.DEV,
    extra: !process.env.DEV ? {
        ssl: {
            rejectUnauthorized: false
        }
    } : false
};
var connectionManager = (0, typeorm_1.getConnectionManager)();
exports.default = connectionManager.create(connectionOptions);
