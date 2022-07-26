"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Station_1 = require("../entity/Station");
var typeorm_1 = require("typeorm");
var Project_controller_1 = __importDefault(require("./Project.controller"));
var station_repository_1 = __importDefault(require("../repository/station.repository"));
var ApiError_1 = __importDefault(require("../error/ApiError"));
var StationController = /** @class */ (function (_super) {
    __extends(StationController, _super);
    function StationController(entity) {
        if (entity === void 0) { entity = Station_1.Station; }
        var _this = _super.call(this, entity) || this;
        _this.getAll = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var repository, stations;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = this.repository;
                        return [4 /*yield*/, repository.find()];
                    case 1:
                        stations = _a.sent();
                        return [2 /*return*/, res.json(stations)];
                }
            });
        }); };
        _this.create = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var customRepository, station;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customRepository = (0, typeorm_1.getCustomRepository)(station_repository_1.default);
                        return [4 /*yield*/, customRepository.createAndSave(req)];
                    case 1:
                        station = _a.sent();
                        return [2 /*return*/, res.json(station)];
                }
            });
        }); };
        _this.update = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var stationData, repo, newStation, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stationData = req.body;
                        repo = this.repository;
                        newStation = new Station_1.Station();
                        newStation.tel = req.body.tel;
                        newStation.name = req.body.tel;
                        newStation.address = req.body.address;
                        console.log(newStation);
                        return [4 /*yield*/, repo.update(req.params.stationId, stationData)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.json(response)];
                }
            });
        }); };
        _this.delete = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var repo, stationId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repo = this.repository;
                        stationId = req.params.stationId;
                        if (!stationId) return [3 /*break*/, 2];
                        return [4 /*yield*/, repo.delete(stationId)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, res.json(result)];
                    case 2: return [2 /*return*/, next(ApiError_1.default.internal('missing station ID'))];
                }
            });
        }); };
        return _this;
    }
    __decorate([
        (0, typeorm_1.UpdateDateColumn)()
    ], StationController.prototype, "update", void 0);
    return StationController;
}(Project_controller_1.default));
exports.default = new StationController();
