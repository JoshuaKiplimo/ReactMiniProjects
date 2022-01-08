import React from "react";

const Categories = ({ title, price, img, desc }) => {
  return (
    <article className="menu-item">
      <img className="photo" src={img}></img>
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <p className="price">{price}</p>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default Categories;
