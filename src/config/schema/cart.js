import Realm from "realm";

class CartSchema extends Realm.Object {
    static schema = {
        name: "Cart",
        properties: {
            "_id": { type: "objectId", default: () => new Realm.BSON.ObjectID() },
            "products": "Data[]",
            "deleted": "Data[]"
        },
        primary_key: "_id"
    }
}

export default CartSchema;