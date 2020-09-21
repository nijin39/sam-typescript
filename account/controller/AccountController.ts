import Response from './interfaces/Response';
import { AwsEvent } from './interfaces/AwsEvent.interface';
import AccountService from '../application/AccountService';

class AccountController {
    [x: string]: any;
    
    accountService: AccountService;

    constructor() {
        this.accountService = new AccountService();
    }

    public createAccount(event:AwsEvent): Response {
        let path = event.path;
        let result:string=this.accountService.createAccount(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        }
    }

    public listAccount(event:AwsEvent): Response {
        let path = event.path;
        let result:string=this.accountService.listAccount(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        }
    }

    public requestAuth(event:AwsEvent): Response {
        let userId = event.body['userId'];
        let password = event.body['password'];
        let result:string = this.accountService.requestAuth(userId, password);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        } 
    }
}

export default AccountController;
