"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account = /** @class */ (function () {
    function Account(id, name, ssgPoint) {
        this.id = id;
        this.name = name;
        this.ssgPoint = ssgPoint;
    }
    Object.defineProperty(Account.prototype, "getAccount", {
        get: function () {
            return this.id + ":" + this.name;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.jongribPoint = function () {
        return 100;
    };
    return Account;
}());
exports.default = Account;
