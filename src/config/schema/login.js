
const LoginSchema = {
    name: "Login",
    properties: {
        "_id": { type: "objectId", default: () => new Realm.BSON.ObjectId() },
        "firstUser": { type: "bool", default: true }
    },
    primary_key: "_id"
}

export default LoginSchema;