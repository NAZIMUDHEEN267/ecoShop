import realm from "../config/schema";


export function addItemToCart(product) {
    const cartObj = realm.objects("Cart"); 

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
        let existProducts = cartObj[0].products;
        console.log(product);
    })
}