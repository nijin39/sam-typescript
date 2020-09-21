import SsgPointManager from "../domain/SsgPointManager"

class SsgPointMockManager implements SsgPointManager{

    jongribPoint(id: string, point: number): number {
        return point+200;
    }

}

export default SsgPointMockManager;