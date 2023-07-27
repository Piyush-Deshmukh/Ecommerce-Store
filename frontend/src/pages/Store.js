import React from "react";
import ProductCard from "../components/ProductCard";
import { productsArray } from "../productsStore";

function Store() {
  return (
    <>
      <div className="container mt-4 px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-6">
          {productsArray.map((product, idx) => (
            <ProductCard product={product} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Store;
