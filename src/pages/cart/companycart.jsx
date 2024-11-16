import React from "react";
import { useCart } from "../../component/context/companycontext";

export const CompanyCart = () => {
  const { cart } = useCart(); // Access cart from context

  return (
    <div>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id}>
            <h4>
              {item.title} x {item.quantity}
            </h4>
            <p>Price: ${item.price * item.quantity}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};
