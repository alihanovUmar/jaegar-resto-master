import { useState } from "react";

// Containers
import FoodMenu from "../../FoodMenu/FoodMenu";
import DishesList from "../../DishesList/DishesList";

// SCSS
import "./HomeMain.scss";

const HomeMain = () => {
  const [activePage, setActivePage] = useState("Hot Dishes");

  return (
    <div className="home__main">
      <div className="container">
        <FoodMenu activePage={activePage} setActivePage={setActivePage} />

        {activePage === "Hot Dishes" && <DishesList />}
        {activePage === "Cold Dishes" && (
          <div className="coming-soon">
            <h1>Cold Dishes</h1>
          </div>
        )}
        {activePage === "Soup" && (
          <div className="coming-soon">
            <h1>Soup</h1>
          </div>
        )}
        {activePage === "Grill" && (
          <div className="coming-soon">
            <h1>Grill</h1>
          </div>
        )}
        {activePage === "Appetizer" && (
          <div className="coming-soon">
            <h1>Appetizer</h1>
          </div>
        )}
        {activePage === "Desert" && (
          <div className="coming-soon">
            <h1>Desert</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeMain;
