import PayCoordinator from '../domain/PayCoordinator';

export default class PayMockCoordinator implements PayCoordinator {

    sendCartInformation(memberId: string, classId: string): boolean {
        if( memberId === "0001") {
            return true;
        } else {
            return false;
        }
    }

}