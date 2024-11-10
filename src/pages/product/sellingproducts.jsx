import React, { useState } from "react";
import "./sellingproducts.css"
import { ProductGroups } from "../ecommerceproducts";

export const OurProduct = () => {
  const CategoryMenu = ({ categories }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    const toggleSubcategory = (category) => {
      if (activeCategory === category) {
        setActiveCategory(null); // Collapse the menu
      } else {
        setActiveCategory(category); // Expand the menu
      }
    };
    return (
      <div className="category-menu">
        {categories.map((category) => (
          <div key={category.name} className="category">
            <button
              onClick={() => toggleSubcategory(category.name)}
              className="category-btn"
            >
              {category.name}
            </button>
            {activeCategory === category.name && (
              <div className="subcategories">
                {category.subcategories.map((subcategory) => (
                  <div key={subcategory} className="subcategory">
                    {subcategory}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Usage in App Component
  const App = () => {
    const categories = ProductGroups; // Your ProductGroups data

    return (
      <div className="app">
        <CategoryMenu categories={categories} />
      </div>
    );
  };
};
