import React from "react";

const CategoryBtn = ({ categories, clickFilter }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => clickFilter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryBtn;
