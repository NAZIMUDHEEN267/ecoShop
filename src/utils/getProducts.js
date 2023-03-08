import axios from "axios";

export default async function getProducts() {

    try {
        const data = await axios.get("../data/data.json");
        const products = await data.data;
        console.log(products);

        return products;
    } catch (error) {
        console.log(error);
    }

}