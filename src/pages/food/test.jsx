
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { CompanyCart } from "../cart/companycart";
import { useCart } from "../../component/context/companycontext";
import './test.css'

export const Tested = () => {
  const [foodproducts, setFoodProducts] = useState([]);
  const { handleAddToCart } = useCart(); // Access handleAddToCart from context

  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setFoodProducts(res.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <div className="productfood">
        {foodproducts.map((product) => (
          <div key={product.id}>
            <div className="entries">
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <h4>${product.price}</h4>
            </div>
            <button
              className="addToCartBttn"
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* Render CompanyCart */}
      <CompanyCart />
    </div>
  );
};
