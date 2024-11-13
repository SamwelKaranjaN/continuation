import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./test.css";

export const Tested = () => {
  const [foodproducts, setFoodProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store the selected product

  // Fetch products from the API
  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setFoodProducts(res.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      setSelectedProduct(null);
    }
  };

  return (
    <div>
      {/* Render the list of products */}
      <div className="productfood">
        {foodproducts.map((product) => (
          <div
            key={product.id}
            className="entries"
            onClick={() => handleProductClick(product)}
          >
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <h4>${product.price}</h4>

            <button className="addToCartBttn">Add To Cart</button>
          </div>
        ))}
      </div>

      {/* Render the modal if a product is selected */}
      {selectedProduct && (
        <div className="modal" onClick={handleOutsideClick}>
          {" "}
          {/* Add onClick to detect clicks outside */}
          <div className="modal-content">
            <h2>{selectedProduct.title}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              style={{ width: "100px" }}
            />
            <h4>${selectedProduct.price}</h4>
            <p>{selectedProduct.description}</p>{" "}
            {/* Assuming 'description' holds the product details */}
            <button className="addToCartBttn">Add To Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};
