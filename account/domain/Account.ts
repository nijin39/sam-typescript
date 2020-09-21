class Account {
    id:string;
    name:string;
    ssgPoint:number;

    constructor(id:string, name:string, ssgPoint:number) {
        this.id = id;
        this.name = name;
        this.ssgPoint = ssgPoint;
    }

    get getAccount(): string {
        return this.id+":"+this.name;
    }

    public jongribPoint(): number {
        return 100;
    }
}

export default Account;