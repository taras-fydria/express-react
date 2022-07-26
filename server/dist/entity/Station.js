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
exports.Station = void 0;
var typeorm_1 = require("typeorm");
var Tank_1 = __importDefault(require("./Tank"));
var Station = /** @class */ (function () {
    function Station() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Station.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'text',
            unique: true,
            zerofill: false,
        })
    ], Station.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'text',
            unique: true,
            zerofill: false,
        })
    ], Station.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'text',
            nullable: false,
        })
    ], Station.prototype, "tel", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Tank_1.default; }, function (tanks) { return tanks.station; })
    ], Station.prototype, "tanks", void 0);
    Station = __decorate([
        (0, typeorm_1.Entity)()
    ], Station);
    return Station;
}());
exports.Station = Station;
