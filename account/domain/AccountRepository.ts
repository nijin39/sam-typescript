import Account from './Account';

interface AccountRepository {
    findAll(): Array<Account>;
    save(account:Account): Account;
}

export default AccountRepository;