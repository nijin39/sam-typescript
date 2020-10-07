import { LoginRequestInfo } from '../controller/AccountController';
import SSGAuthenticator, { SSGLoginResponse } from '../domain/SSGAuthenticator'

class SSGMockAuthenticator implements SSGAuthenticator {

    login(loginRequestInfo: LoginRequestInfo): SSGLoginResponse {
        if( loginRequestInfo.username === "nijin39" || loginRequestInfo.username === "nijin40"){
            let randomString = Math.random().toString(36).substr(2, 12);
            return {token:randomString};
        } else {
            throw new Error("Login failed");
        }
    }

}

export default SSGMockAuthenticator;