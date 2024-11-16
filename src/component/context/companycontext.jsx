import React, { createContext, useState, useContext } from "react";

// Create a context for the cart
export const CartContext = createContext();

// Cart provider component to wrap the app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart (check for duplicates)
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product already exists in the cart
      const existingProduct = prevCart.find(item => item.id === product.id);
      
      if (existingProduct) {
        // If the product exists, increase the quantity
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it doesn't exist, add the product with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const handleRemoveFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, handleAddToCart, handleRemoveFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};
