"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SSGMockAuthenticator = /** @class */ (function () {
    function SSGMockAuthenticator() {
    }
    SSGMockAuthenticator.prototype.login = function (loginRequestInfo) {
        if (loginRequestInfo.username === "nijin39" || loginRequestInfo.username === "nijin40") {
            var randomString = Math.random().toString(36).substr(2, 12);
            return { token: randomString };
        }
        else {
            throw new Error("Login failed");
        }
    };
    return SSGMockAuthenticator;
}());
exports.default = SSGMockAuthenticator;
