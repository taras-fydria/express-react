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
var Tank_1 = __importDefault(require("./Tank"));
var Station_1 = require("./Station");
var FuelType = /** @class */ (function () {
    function FuelType() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], FuelType.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'float', nullable: false })
    ], FuelType.prototype, "price", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Tank_1.default; }, function (tank) { return tank.fuelType; })
    ], FuelType.prototype, "tanks", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return Station_1.Station; })
    ], FuelType.prototype, "stations", void 0);
    FuelType = __decorate([
        (0, typeorm_1.Entity)()
    ], FuelType);
    return FuelType;
}());
exports.default = FuelType;
