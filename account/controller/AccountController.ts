import Response from './interfaces/Response';
import { AwsEvent } from './interfaces/AwsEvent.interface';
import AccountService from '../application/AccountService';
import { CognitoLoginInfo } from '../application/AccountService';

export interface LoginRequestInfo {
    username: string;
    password: string;
}

class AccountController {

    accountService: AccountService;

    constructor() {
        this.accountService = new AccountService();
    }

    public createAccount(event: AwsEvent): Response {
        let path = event.path;
        let result: string = this.accountService.createAccount(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify(result),
            'headers':{'Access-Control-Allow-Origin':'*'},
        }
    }

    public listAccount(event: AwsEvent): Response {
        let path = event.path;
        let result: string = this.accountService.listAccount(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify(result),
            'headers':{'Access-Control-Allow-Origin':'*'},
        }
    }

    public async login(event: AwsEvent): Promise<Response> {

        let bodyString: string = <string><unknown>event.body;
        let eventBody: LoginRequestInfo = JSON.parse(bodyString)
        console.log("EVENT :",eventBody);

        try {
            let result: CognitoLoginInfo = await this.accountService.login(eventBody);
            console.log("Login Result :",result);
            return new Promise((resolve, reject) => {
                resolve({
                    'statusCode': 200,
                    'headers':{'Access-Control-Allow-Origin':'*'},
                    'body': JSON.stringify(result)
                });
            })
        } catch (err) {
            return new Promise((resolve, reject) => {
                reject({
                    'statusCode': 403,
                    'headers':{'Access-Control-Allow-Origin':'*'},
                    'body': JSON.stringify({
                        message: "login failed"
                    })
                });
            });
        }
    }
}


export default AccountController;
