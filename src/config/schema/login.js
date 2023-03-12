
const LoginSchema = {
    name: "Login",
    properties: {
        "_id": { type: "objectId", default: () => Realm.BSON.ObjectID()},
        access: {type: "bool", default: false}
    },
    primary_key: "_id"
}

export default LoginSchema;
