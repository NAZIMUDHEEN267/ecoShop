import Realm from "realm";


const LoginSchema = {
    name: "login",
    properties: {
        "_id": { type: "objectId", default: () => Realm.BSON.ObjectID()}
        username: "string",
        passwd: "string"
    }
    primary_key: "_id"
}

