import Account from "../domain/Account";
import AccountRepository from "../domain/AccountRepository";
import AccountMockRepository from "../infra/AccountMockRepository"
import SsgPointManager from "../domain/SsgPointManager";
import SsgPointMockManager from "../infra/SsgPointMockManager";

class AccountService {
    accountRepository: AccountRepository;
    ssgPointManager: SsgPointManager;

    constructor() {
        this.accountRepository = new AccountMockRepository();
        this.ssgPointManager = new SsgPointMockManager();
    }

    public createAccount(path: string): string {
        let account: Account = this.accountRepository.save(new Account("001", "KIM JONG IL",100));
        return account.getAccount;
    }

    public jongribPoint(id:string, point: number): number {
        // let account:Account = this.accountRepository.findOne(accountId);
        // let currentPoint = account.jungribPoint(id, point, ssgPointManager);
        return 200;
    }

    public listAccount(path: string): string {
        let accountList: Array<Account> = this.accountRepository.findAll();
        let accountString: string = "";
        accountList.forEach(account => { 
            accountString+=account.getAccount+" "; 
            console.log(accountString)});
        return accountString;
    }
}

export default AccountService;