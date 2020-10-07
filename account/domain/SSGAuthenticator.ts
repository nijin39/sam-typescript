import { LoginRequestInfo } from "../controller/AccountController";

export interface SSGLoginResponse{
    token:string;
}

interface SSGAuthenticator {
    login(loginRequestInfo:LoginRequestInfo):SSGLoginResponse;
}

export default SSGAuthenticator;