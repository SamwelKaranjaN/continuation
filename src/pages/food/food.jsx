import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./food.css";

export const Food = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data when the component mounts
    Axios.get("https://dummyjson.com/products?sortBy=title&order=asc").then(
      (res) => {
        setProducts(res.data.products);
      }
    );
  }, []);

  // Render the list of products
  return (
    <div>
      <h1>Food Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} />
      <button className="addToCartBttn" >
        Add To Cart 
      </button>
          </div>
        ))}
      </div>
    </div>
  );
};
