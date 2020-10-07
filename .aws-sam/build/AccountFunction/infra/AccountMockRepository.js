"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Account_1 = __importDefault(require("../domain/Account"));
var AccountMockRepository = /** @class */ (function () {
    function AccountMockRepository() {
    }
    AccountMockRepository.prototype.findAll = function () {
        return [new Account_1.default("000", "KANG SUNG IL", 100), new Account_1.default("001", "KIM JONG IL", 200), new Account_1.default("002", "LEE HEE JONG", 300)];
    };
    AccountMockRepository.prototype.save = function (account) {
        return account;
    };
    return AccountMockRepository;
}());
exports.default = AccountMockRepository;
