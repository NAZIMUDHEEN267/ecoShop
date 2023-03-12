
import Realm from "realm";
import LoginSchema from "./login";
import SignSchema from "./sign";

const realm = new Realm({
    schema: [
        LoginSchema,
        SignSchema
    ]
});


export default realm;