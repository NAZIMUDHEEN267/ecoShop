
const DataSchema = {
    name: "Data",
    properties: {
        "_id": "int",
        "title": "string",
        "description": "string",
        "price": "int",
        "discountPercentage": "float",
        "rating": "float",
        "stock": "int",
        "brand": "string",
        "category": "string",
        "thumbnail": "string",
        "images": "string?[]"
    }
}

export default DataSchema;