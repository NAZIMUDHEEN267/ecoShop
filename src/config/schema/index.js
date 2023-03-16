import Realm from "realm";
import SignSchema from "./sign";
import { ATLAS_APP_ID } from "@env";

// const app = new Realm.App({ id: ATLAS_APP_ID, timeout: 10000 });
// const credentials = Realm.Credentials.jwt();

export default new Realm({schema: [SignSchema]})
// async () => {
    
//     const loggedInUser = await app.logIn(credentials);

//     const configuration = {
//         schema: [
//             SignSchema
//         ],
//         sync: {
//             user: app.currentUser,
//             flexible: true
//         }
//     };

//     return Realm.open(configuration);
// }
