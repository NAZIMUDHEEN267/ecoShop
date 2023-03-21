import realm from "../config/schema";


const cartObj = realm.objects("Cart");

export function addItemToCart(product) {
    if (cartObj.length < 1) {
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

export function deleteItemFromCart(product) {
    console.log(cartObj[0]);

    realm.write(() => {
        cartObj[0].products = cartObj[0].products.filter(item => {
            if (item._id !== product._id) {
                return item;
            }
        })

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

    return cartObj[0].products
}