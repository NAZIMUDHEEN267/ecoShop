import * as Keychain from "react-native-keychain";
export default class StoreCredentials {
    constructor(values) {
        this.username = JSON.stringify(values.username);
        this.passwd = JSON.stringify(values.passwd);
    }
    
    async secureCredentials () {
        try {
            await Keychain.setGenericPassword(this.username, this.passwd);
        } catch (error) {
            console.error(error);
        }
    }

    static async getCredentials() {
        // await Keychain.resetGenericPassword();

        try {
            const credentials = await Keychain.getGenericPassword();

            if(credentials) {
                console.log(credentials.username);
            } else {
                console.error("no credentials...");
            }
        } catch (error) {
            console.error(error);
        }
    }
}