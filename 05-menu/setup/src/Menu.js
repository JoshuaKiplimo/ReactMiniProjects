import React from "react";

const Menu = ({ filterItems, All }) => {
  //const { Breakfast } = click;
  return (
    <>
      <div className="btn-container">
        <button className="filter-btn" onClick={() => filterItems("all")}>
          All
        </button>
        <button className="filter-btn" onClick={() => filterItems("breakfast")}>
          Breakfast
        </button>
        <button className="filter-btn" onClick={() => filterItems("lunch")}>
          Lunch
        </button>
        <button className="filter-btn" onClick={() => filterItems()}>
          Shakes
        </button>
      </div>
    </>
  );
};

export default Menu;
