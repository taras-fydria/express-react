"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Station_1 = require("./Station");
var FuelType_1 = __importDefault(require("./FuelType"));
var Tank = /** @class */ (function () {
    function Tank() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Tank.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Station_1.Station; }, function (station) { return station.tanks; })
    ], Tank.prototype, "station", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return FuelType_1.default; }, function (fuelType) { return fuelType.tanks; })
    ], Tank.prototype, "fuelType", void 0);
    Tank = __decorate([
        (0, typeorm_1.Entity)()
    ], Tank);
    return Tank;
}());
exports.default = Tank;
