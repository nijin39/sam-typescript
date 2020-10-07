"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Account_1 = __importDefault(require("../domain/Account"));
var AccountMockRepository_1 = __importDefault(require("../infra/AccountMockRepository"));
var CognitoUserpoolManager_1 = __importDefault(require("../infra/CognitoUserpoolManager"));
var SSGMockAuthenticator_1 = __importDefault(require("../infra/SSGMockAuthenticator"));
var AccountService = /** @class */ (function () {
    function AccountService() {
        this.accountRepository = new AccountMockRepository_1.default();
        this.ssgAuthenticator = new SSGMockAuthenticator_1.default();
        this.userpoolManager = new CognitoUserpoolManager_1.default();
    }
    AccountService.prototype.createAccount = function (path) {
        var account = this.accountRepository.save(new Account_1.default("001", "KIM JONG IL", 100));
        return account.getAccount;
    };
    AccountService.prototype.jongribPoint = function (id, point) {
        // let account:Account = this.accountRepository.findOne(accountId);
        // let currentPoint = account.jungribPoint(id, point, ssgPointManager);
        return 200;
    };
    AccountService.prototype.listAccount = function (path) {
        var accountList = this.accountRepository.findAll();
        var accountString = "";
        accountList.forEach(function (account) {
            accountString += account.getAccount + " ";
            console.log(accountString);
        });
        return accountString;
    };
    AccountService.prototype.login = function (loginRequestInfo) {
        // 01. Login, Password를 가지고 SSG에 로그인 요청
        try {
            // 01. Login, Password를 가지고 SSG에 로그인 요청
            var loginResponse = this.ssgAuthenticator.login(loginRequestInfo);
            // 02-01. 로그인 성공시
            var isExist = this.userpoolManager.findByUsername(loginRequestInfo.username);
            if (!isExist) {
                // 02-01-01. 계정 존재 여부 확인, 계정 없음 SignUp.
                this.userpoolManager.signUp(loginRequestInfo.username, loginResponse.token);
            }
            else {
                // 02-01-02. 계정 존재 여부 확인, 계정 있으면 Password Update.
                this.userpoolManager.updatePassword(loginRequestInfo.username, loginResponse.token);
            }
            return {
                username: loginRequestInfo.username,
                password: loginResponse.token
            };
        }
        catch (error) {
            // 02-02. 로그인 실패시
            throw new Error('Login failed');
        }
    };
    return AccountService;
}());
exports.default = AccountService;
