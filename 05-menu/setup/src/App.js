import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [foodcategory, UsefoodCategories] = useState(items);
  const filterItems = (category) => {
    if (category === "all") {
      UsefoodCategories(items);
    } else {
      const newItems = items.filter((food) => food.category === category);
      UsefoodCategories(newItems);
    }
  };

  return (
    <>
      <main>
        <section className="menu section">
          <header>
            <h2 className="title">Our Menu </h2>
            <div className="underline"></div>
          </header>

          <article className="section-center">
            <Menu filterItems={filterItems} />
          </article>
          <article className="section-center">
            {foodcategory.map((food) => {
              return <Categories key={food.id} {...food} />;
            })}
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
