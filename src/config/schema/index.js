
import Realm from "realm";
import LoginSchema from "./login";
import SignSchema from "./sign";


export default new Realm({schema: [
    LoginSchema,
    SignSchema
]});
