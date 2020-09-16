import Response from './interfaces/Response';
import { AwsEvent } from './interfaces/AwsEvent.interface';
import AccountService from '../application/AccountService';

class AccountController {
    
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
}

export default AccountController;
