// Backpack: price_1MRUQ2SJnpbcq9SOoy0GZ21L
// Tshirt: price_1MRURXSJnpbcq9SOEnS9vDYB
// Shoes: price_1MRUSkSJnpbcq9SORBoUDCDX
// Cup: price_1MQtStSJnpbcq9SOtTxTGqTt
// Sunglasses: price_1MQtUbSJnpbcq9SOMziK2I97
// Camera: price_1MQtVlSJnpbcq9SOBkgD9mlq
import Backpack from "../public/images/Backpack.png"



const productsArray = [
    {
        id: "price_1MRUQ2SJnpbcq9SOoy0GZ21L",
        title: "Backpack",
        price: 109.99,
        img: Backpack
    },
    {
        id: "price_1MRURXSJnpbcq9SOEnS9vDYB",
        title: "Tshirt",
        price: 22.99,
        img: "https://media.istockphoto.com/id/1142212002/photo/front-of-men-cut-black-t-shirt-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=VZARRRO1PwMYKV9cHquulb69QwbxSEFA5S76-axY27c="
    },
    {
        id: "price_1MRUSkSJnpbcq9SORBoUDCDX",
        title: "Shoes",
        price: 55.99,
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/371131/01/sv01/fnd/IND/fmt/png"
    },
    {
        id: "price_1MQtStSJnpbcq9SOtTxTGqTt",
        title: "Cup",
        price: 4.99,
        img: "https://i.pinimg.com/474x/a0/db/43/a0db439f982f549ee1133ee154fbb719--black-coffee-mug-coffee-mugs.jpg"
    },
    {
        id: "price_1MQtUbSJnpbcq9SOMziK2I97",
        title: "Sunglasses",
        price: 9.99,
        img: "https://m.media-amazon.com/images/I/51zEsraniRL._UL1500_.jpg"
    },
    {
        id: "price_1MQtVlSJnpbcq9SOBkgD9mlq",
        title: "Camera",
        price: 39.99,
        img: "https://futureforward.in/images/thumbs/010/0108160_nikon-z6-bk-with-24-70mm-f4s-lens-kit_600.jpeg"
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if(productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };
