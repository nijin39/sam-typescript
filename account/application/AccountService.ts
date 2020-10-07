import Account from "../domain/Account";
import AccountRepository from "../domain/AccountRepository";
import UserpoolManager from "../domain/UserpoolManager";
import AccountMockRepository from "../infra/AccountMockRepository"
import CognitoUserpoolManager from "../infra/CognitoUserpoolManager"
import { LoginRequestInfo } from "../controller/AccountController";
import SSGMockAuthenticator from "../infra/SSGMockAuthenticator";
import SSGAuthenticator, { SSGLoginResponse } from "../domain/SSGAuthenticator";

export interface CognitoLoginInfo {
    username: string,
    password: string
}

class AccountService {
    accountRepository: AccountRepository;
    ssgAuthenticator: SSGAuthenticator;
    userpoolManager: UserpoolManager;

    constructor() {
        this.accountRepository = new AccountMockRepository();
        this.ssgAuthenticator = new SSGMockAuthenticator();
        this.userpoolManager = new CognitoUserpoolManager();
    }

    public createAccount(path: string): string {
        let account: Account = this.accountRepository.save(new Account("001", "KIM JONG IL", 100));
        return account.getAccount;
    }

    public jongribPoint(id: string, point: number): number {
        // let account:Account = this.accountRepository.findOne(accountId);
        // let currentPoint = account.jungribPoint(id, point, ssgPointManager);
        return 200;
    }

    public listAccount(path: string): string {
        let accountList: Array<Account> = this.accountRepository.findAll();
        let accountString: string = "";
        accountList.forEach(account => {
            accountString += account.getAccount + " ";
            console.log(accountString)
        });
        return accountString;
    }

    public async login(loginRequestInfo: LoginRequestInfo): Promise<CognitoLoginInfo> {
        // 01. Login, Password를 가지고 SSG에 로그인 요청
        try {
            // 01. Login, Password를 가지고 SSG에 로그인 요청
            let loginResponse: SSGLoginResponse = this.ssgAuthenticator.login(loginRequestInfo);
            // 02-01. 로그인 성공시
            let isExist: boolean = await this.userpoolManager.findByUsername(loginRequestInfo.username);
            console.log("ISEXIST :", isExist);
            if (!isExist) {
                // 02-01-01. 계정 존재 여부 확인, 계정 없음 SignUp.
                await this.userpoolManager.signUp(loginRequestInfo.username, loginResponse.token);
                await this.userpoolManager.updatePassword(loginRequestInfo.username, loginResponse.token);
            } else {
                // 02-01-02. 계정 존재 여부 확인, 계정 있으면 Password Update.
                await this.userpoolManager.updatePassword(loginRequestInfo.username, loginResponse.token);
            }

            return new Promise((resolve, reject) => {
                resolve({ username: loginRequestInfo.username, password: loginResponse.token })
            });

        } catch (error) {
            // 02. 로그인 실패시
            console.log(error);
            return new Promise((resolve,reject) => reject("login Fail"));
        }
    }
}

export default AccountService;