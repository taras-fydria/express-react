"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TanksController = /** @class */ (function () {
    function TanksController() {
    }
    TanksController.prototype.getAll = function (req, res) {
        return res.send('all tanks');
    };
    return TanksController;
}());
exports.default = new TanksController();
