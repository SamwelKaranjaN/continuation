import React, {createContext} from "react";
import { useState } from "react";


export const CompanyContext = createContext (null);

const [companyproducts, setCompanyProducts] = useState([]);


const companydefaultcart = () => {
    var counting= {};
    for (var i = 1; i <= Axios.length + 1; i++) {
        counting[1]= 0;
  };

const addToCompanyCart = () =>{
    setCompanyProducts((prev) =>({...prev, [itemid]: prev[itemid] + 1 || 1}));
}

const removeFromCompanyCart = () => {
    setCompanyProducts((prev) =>({...prev, [itemid]: prev[itemid] -1 || 0}));
}

const tobereceived = {
    addToCompanyCart,
    removeFromCompanyCart
}
};