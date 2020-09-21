import Account from "../domain/Account";
import AccountRepository from "../domain/AccountRepository";

class AccountMockRepository implements AccountRepository{

    findAll(): Array<Account> {
        return [new Account("000","KANG SUNG IL",100),new Account("001", "KIM JONG IL",200), new Account("002", "LEE HEE JONG", 300)]
    }

    save(account: Account): Account {
        return account;
    }
    
}

export default AccountMockRepository;