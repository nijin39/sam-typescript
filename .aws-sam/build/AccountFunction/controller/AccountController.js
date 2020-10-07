"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AccountService_1 = __importDefault(require("../application/AccountService"));
var AccountController = /** @class */ (function () {
    function AccountController() {
        this.accountService = new AccountService_1.default();
    }
    AccountController.prototype.createAccount = function (event) {
        var path = event.path;
        var result = this.accountService.createAccount(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        };
    };
    AccountController.prototype.listAccount = function (event) {
        var path = event.path;
        var result = this.accountService.listAccount(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        };
    };
    AccountController.prototype.login = function (event) {
        var bodyString = event.body;
        var eventBody = JSON.parse(bodyString);
        try {
            var result = this.accountService.login(eventBody.user);
            return {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: result
                })
            };
        }
        catch (error) {
            return {
                'statusCode': 403,
                'body': JSON.stringify({
                    message: "login failed"
                })
            };
        }
    };
    return AccountController;
}());
exports.default = AccountController;
