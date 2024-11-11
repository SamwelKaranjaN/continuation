import React, { useState } from 'react';
import { ProductGroups } from '../ecommerceproducts';
import './Company.css'; // Import CSS file for styling

export const Company = () => {
  // State to track which category is hovered
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="company-container">
      <div className="categories">
        {ProductGroups.map((group, index) => (
          <div
            key={index}
            className="category"
            onMouseEnter={() => setHoveredCategory(group.name)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="category-name">{group.name}</div>
            {/* Only show subcategories of the hovered category */}
            {hoveredCategory === group.name && (
              <div className="subcategory-list">
                {group.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex} className="subcategory">
                    {subcategory}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
