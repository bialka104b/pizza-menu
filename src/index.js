import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import { Menu, Footer, Header } from "./components/index";
import "./index.css";

function App(params) {
  const [pizzaMenu, setPizzaMenu] = useState(pizzaData);
  const [selectedPizzaIndex, setSelectedPizzaIndex] = useState(null); // Indeks wybranej pizzy
  const selectedPizza =
    selectedPizzaIndex !== null ? pizzaMenu[selectedPizzaIndex] : null;

  // Funkcja do wyboru pizzy
  const selectPizza = (index) => {
    setSelectedPizzaIndex(index);
  };

  // Funkcja do obsługi zamówienia
  const handleOrder = () => {
    if (selectedPizza) {
      // Aktualizujemy stan pizzy na wyprzedaną
      const updatedMenu = pizzaMenu.map((pizza, index) => {
        if (index === selectedPizzaIndex) {
          return { ...pizza, soldOut: true }; // Zmieniamy status na soldOut
        }
        return pizza;
      });

      // Aktualizujemy stan
      setPizzaMenu(updatedMenu);
      setSelectedPizzaIndex(null); // Resetujemy wybraną pizzę po zamówieniu
      console.log(
        `You have ordered ${selectedPizza.name} for ${selectedPizza.price} USD`
      );
    }
  };

  return (
    <div className="max-w-7xl my-0 mx-auto flex flex-col  gap-[4.8rem]">
      <Header className="header" />
      <Menu
        menu={pizzaMenu}
        className="menu"
        selectPizza={selectPizza}
        selectedPizza={selectedPizzaIndex}
      />
      <Footer
        className="footer"
        handleOrder={handleOrder}
        selectedPizza={selectedPizza}
      />
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //tryb ścisły
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Before React v18
// React.render(<App />, document.getElementById("root"));
