import Account from "../domain/Account";
import AccountRepository from "../domain/AccountRepository";

class AccountDDBRespotiry implements AccountRepository{

    findAll(): Array<Account> {
        throw new Error("Method not implemented.");
    }

    save(account: Account): Account {
        throw new Error("Method not implemented.");
    }
    
}