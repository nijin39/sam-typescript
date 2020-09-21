
export default class Payment {
    memberId:string;
    classId:string;
    paymentRequestId:number;

    constructor(memberId:string, classId:string){
        this.memberId = memberId;
        this.classId = classId;
    }

    public generatePayId():number{
        return this.paymentRequestId+1;
    }
}