"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var ProjectController = /** @class */ (function () {
    function ProjectController(entity) {
        this.entity = entity;
    }
    Object.defineProperty(ProjectController.prototype, "entity", {
        get: function () {
            return this._entity;
        },
        set: function (value) {
            this._entity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectController.prototype, "repository", {
        get: function () {
            return (0, typeorm_1.getRepository)(this.entity);
        },
        enumerable: false,
        configurable: true
    });
    return ProjectController;
}());
exports.default = ProjectController;
