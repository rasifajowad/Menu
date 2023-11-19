import { useState } from "react";
import MenuCard from "./MenuCard";
import Title from "./Title";

import menu from "./data";
import CategoryBtn from "./CategoryBtn";

const filterCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [state, setState] = useState(menu);
  const [categories, setCategories] = useState(filterCategories);

  const clickFilter = (categories) => {
    if (categories === "all") {
      return setState(menu);
    }
    const newItems = menu.filter((item) => item.category === categories);
    setState(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title />
        <CategoryBtn categories={categories} clickFilter={clickFilter} />
        <MenuCard menu={state} />
      </section>
    </main>
  );
};
export default App;
