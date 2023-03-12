
const SignSchema = {
    name: "Sign",
    properties: {
        "_id": { type: "objectId", default: () => new Realm.BSON.ObjectId() },
        username: "string",
        street: "string",
        city: "string",
        houseNo: "int",
        state: "string",
        zip: "int",
        phone: "int",
        passwd: "mixed"
    },
    primary_key: "_id"
}

export default SignSchema;

