"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var CognitoUserpoolManager = /** @class */ (function () {
    function CognitoUserpoolManager() {
        this.cognitoIdentityServiceProvider = new aws_sdk_1.default.CognitoIdentityServiceProvider();
    }
    CognitoUserpoolManager.prototype.signUp = function (username, password) {
        var params = {
            ClientId: 'vvvibr1d34ergf32a7p1rk4j',
            Username: username,
            Password: password,
            UserAttributes: [
                {
                    Name: 'nickname',
                    Value: username
                }
            ]
        };
        this.cognitoIdentityServiceProvider.signUp(params, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
            }
        });
    };
    CognitoUserpoolManager.prototype.updatePassword = function (username, password) {
        var params = {
            Password: password,
            Permanent: true,
            Username: username,
            UserPoolId: 'ap-northeast-2_0p9rtV87r'
        };
        this.cognitoIdentityServiceProvider.adminSetUserPassword(params, function (err, data) {
            if (!err) {
                console.log('Change Password');
            }
            else {
                throw new Error("Password change failed");
            }
        });
    };
    CognitoUserpoolManager.prototype.findByUsername = function (username) {
        var params = {
            Username: 'nijin39',
            UserPoolId: 'ap-northeast-2_0p9rtV87r'
        };
        var isExist = false;
        this.cognitoIdentityServiceProvider.adminGetUser(params, function (err, data) {
            if (err)
                isExist = false;
            else {
                isExist = true;
            }
            ;
        });
        return isExist;
    };
    return CognitoUserpoolManager;
}());
exports.default = CognitoUserpoolManager;
