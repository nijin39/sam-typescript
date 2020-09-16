import Account from "../domain/Account";
import AccountRepository from "../domain/AccountRepository";

class AccountMockRepository implements AccountRepository{

    findAll(): Array<Account> {
        return [new Account("000","KANG SUNG IL"),new Account("001", "KIM JONG IL"), new Account("002", "LEE HEE JONG")]
    }

    save(account: Account): Account {
        return account;
    }
    
}

export default AccountMockRepository;