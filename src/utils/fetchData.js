const data = require("../data/data.json");
import Realm from "../config/schema";

export default function fetchData () {
    const dataDb = Realm.objects("Data");

    if(dataDb.length < 1) {
        data.products.forEach(product => {
            Realm.write(() => {
                Realm.create("Data", {
                    _id: product.id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    discountPercentage: product.discountPercentage,
                    rating: product.rating,
                    stock: product.stock,
                    brand: product.brand,
                    category: product.category,
                    thumbnail: product.thumbnail,
                    images: product.images                    
                })
            })
        })

        return dataDb;
    }

    return dataDb;
}