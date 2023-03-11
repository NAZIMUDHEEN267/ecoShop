import Realm from "realm";

const SignSchema = {
    name: "Sign",
    properties: {
        "_id": { type: "objectId", default: () => new Realm.BSON.ObjectId() },
        name: "string",
        street: "string",
        city: "string",
        email: "string",
        houseNo: "int",
        state: "string",
        zip: "int",
        phone: "int",
        passwd: "string"
    },
    primary_key: "_id"
}

export default Realm.open({ schema: [SignSchema] });

