import Account from "../domain/Account";
import AccountRepository from "../domain/AccountRepository";
import AccountMockRepository from "../infra/AccountMockRepository"

class AccountService {
    accountRepository: AccountRepository;

    constructor() {
        this.accountRepository = new AccountMockRepository();
    }

    public createAccount(path: string): string {
        let account: Account = this.accountRepository.save(new Account("001", "KIM JONG IL"));
        return account.getAccount;
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