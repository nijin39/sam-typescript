import { AwsEvent } from './interfaces/AwsEvent.interface';
import PaymentService from '../application/PaymentService';
import Response from './interfaces/Response';
import Payment from "../domain/Payment";

class PaymentController {
    
    paymentService: PaymentService;

    constructor() {
        this.paymentService = new PaymentService();
    }

    // 장바구니에 추가
    // addClass(memberId, classId):boolean
    //    장바구니있나 확인
    //       없으면 생성,하고 추가
    //           new Cart
    //           cart.addClass()
    //       있으면 추가
    // 장바구니 조회
    // findClassesByMemberId(memberId):Array<Class>
    // 장바구니에 담겨있는 강좌 초기화
    // resetCart(memberId):boolean

    public requestApprove(event:AwsEvent): Response {
        let memberId:string = event.body['memberId'];
        let classId:string = event.body['classId'];
        let payment:Payment = new Payment(memberId, classId);
        //let returnCode:boolean = this.paymentService.requestApprove(payment);
        let returnCode:boolean = this.paymentService.requestApprove(memberId, classId);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: returnCode
            })
        }
    }
}

export default PaymentController;
