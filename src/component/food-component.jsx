import React from "react";
import { useState } from "react";

const [cartproducts, setCartProducts] = useState();

const addtocart = (itemid) => {
  setCartProducts((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 || 1 }));
};

const removefromcart =()=>{
  setCartProducts ((prev) =>({...prev, [itemid]: prev[itemid] -1 || 0}))
};


export const Componential = () => {
  return <div className="Addtocart"></div>;
};
