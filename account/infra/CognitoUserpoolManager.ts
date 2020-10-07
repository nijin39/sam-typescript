import UserpoolManager from '../domain/UserpoolManager';
import AWS from 'aws-sdk';

class CognitoUserpoolManager implements UserpoolManager {

    cognitoIdentityServiceProvider: AWS.CognitoIdentityServiceProvider;

    constructor() {
        this.cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();
    }

    signUp(username: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const params = {
                ClientId: '73diae21orh7gnrtq59gsi2h1h',
                Username: username,
                Password: password,
                UserAttributes: [
                    {
                        Name: 'email',
                        Value: username + '@gmail.com'
                    }
                ]
            }

            this.cognitoIdentityServiceProvider.signUp(params, function (err, data) {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                else {
                    var cognitoUser = data;
                    resolve(data);
                }
            });
        });
    }

    updatePassword(username: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const params = {
                Password: password,
                Permanent: true,
                Username: username,
                UserPoolId: 'ap-northeast-2_N8dvwnNTc'
            };

            this.cognitoIdentityServiceProvider.adminSetUserPassword(params, (err, data) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                else {
                    var cognitoUser = data;
                    resolve(data);
                }
            });
        });
    }

    findByUsername(username: string): Promise<boolean> {
        return new Promise((resolve, reject) => {

            const params = {
                Username: username,
                UserPoolId: 'ap-northeast-2_N8dvwnNTc'
            }
    
            this.cognitoIdentityServiceProvider.adminGetUser(params, function (err, data) {
                if (err){
                    console.log(err);
                    resolve(false);
                    return;
                }
                else {
                    resolve(true);
                };
            });
        });
    }



}

export default CognitoUserpoolManager;