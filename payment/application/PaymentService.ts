import PayCoordinator from "../domain/PayCoordinator";
import PayMockCoordinator from "../infra/PayMockCoordinator";

class PaymentService {

    payCoordinator:PayCoordinator;
    //account~~~

    constructor() {
        this.payCoordinator = new PayMockCoordinator();
    }

    public requestApprove(memberId:string, classId:string):boolean {
        //result account~~.validCheck(memberId)
        // if ( 유효하면 )
        let resultCode:boolean = this.payCoordinator.sendCartInformation(memberId, classId)
        return true;
    }

}

export default PaymentService;