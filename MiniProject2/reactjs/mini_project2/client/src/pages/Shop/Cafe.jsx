import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Menu";
import "./Cafe.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Vizmaker Cafe</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default Shop