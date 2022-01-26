"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Station = void 0;
var DataBase_1 = __importDefault(require("../DataBase"));
var sequelize_1 = require("sequelize");
exports.Station = DataBase_1.default.define('Station', {
    name: {
        type: sequelize_1.STRING,
        unique: true,
        allowNull: false,
    },
    address: {
        type: sequelize_1.STRING,
        unique: true,
        allowNull: false,
    },
    tel: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
});
var FuelType = DataBase_1.default.define('FuelType', {
    name: {
        type: sequelize_1.STRING, unique: true, allowNull: false
    },
    price: {
        type: sequelize_1.INTEGER, allowNull: false,
    }
});
var Region = DataBase_1.default.define('Region', {
    id: {
        type: sequelize_1.INTEGER, primaryKey: true, autoIncrement: true
    },
    name: {
        type: sequelize_1.STRING, primaryKey: true, allowNull: false, unique: true
    }
});
var Tank = DataBase_1.default.define('Tank', {
    id: { type: sequelize_1.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.STRING },
    volume: { type: sequelize_1.INTEGER },
});
exports.Station.hasMany(Tank, {
    foreignKey: 'tankId'
});
Tank.belongsTo(exports.Station);
FuelType.hasMany(Tank, {
    foreignKey: 'tankId'
});
Tank.belongsTo(FuelType);
exports.default = {
    Station: exports.Station,
    Tank: Tank,
    FuelType: FuelType,
    Region: Region
};
