class Account {
    id:string;
    name:string;
    constructor(id:string, name:string) {
        this.id = id;
        this.name = name;
    }

    get getAccount(): string {
        return this.id+":"+this.name;
    }
}

export default Account;