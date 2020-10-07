
interface UserpoolManager {
    signUp(username:string, password:string):Promise<any>;
    findByUsername(username:string):Promise<boolean>;
    updatePassword(username:string, password:string):Promise<any>;
}

export default UserpoolManager;