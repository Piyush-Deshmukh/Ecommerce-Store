import React, { useContext } from "react";
import { CartContext } from "../CartContext";

function ProductCard(props) {
  const product = props.product;

  const cart = useContext(CartContext);

  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <>
      <div className="max-w-2xl mx-auto my-5 hover:transform hover:scale-105 duration-300">
        <div className="bg-[#d7d7d9] shadow-[0_35px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg max-w-sm dark:bg-[#d7d7d9] hover:shadow-3xl">
            <img
              className="p-8"
              src={product.img}
              alt="product"
            />
          <div className="px-5 pb-5">
            <h3 className="text-black font-semibold text-xl tracking-tight dark:text-white text-left">
              {product.title}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-black dark:text-white">
                ${product.price}
              </span>
              {productQuantity > 0 ? (
                <button
                  onClick={() => cart.deleteFromCart(product.id)}
                  className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 no-underline"
                >
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={() => cart.addOneToCart(product.id)}
                  className="text-white bg-black hover:opacity-90 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:opacity-90 no-underline"
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
