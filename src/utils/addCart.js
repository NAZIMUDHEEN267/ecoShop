import realm from "../config/schema";


const cartObj = realm.objects("Cart");

export function addItemToCart(product) {
    if(cartObj.length < 1) {
        realm.write(() => {
            realm.create("Cart", {
                products: [product]
            })
        })
    } else {
        realm.write(() => {
            cartObj[0].products = [...cartObj[0].products, product];
        })
    }
}

export function deleteItemFromCart(product){    
    realm.write(() => {
        realm.delete(product);

        // if (cartObj.length < 1) {
        //     realm.write(() => {
        //         realm.create("Cart", {
        //             products: [product]
        //         })
        //     })
        // } else {
        //     realm.write(() => {
        //         cartObj[0].products = [...cartObj[0].products, product];
        //     })
        // }
    })
}