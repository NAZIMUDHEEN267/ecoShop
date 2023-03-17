
const LoginSchema = {
    name: "Login",
    properties: {
        "_id": { type: "objectId", default: () => new Realm.BSON.ObjectId() },
        "firstUser": "bool"
    },
    primary_key: "_id"
}

export default LoginSchema;