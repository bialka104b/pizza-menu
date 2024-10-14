import React from "react";
import {Pizza} from "./index"

export default function Menu({
    menu = [],
    className = '',
    selectPizza, selectedPizza
}) {
    const numPizzas = menu.length;
    return (
        <div className={className}>
            <h2>Our menu</h2>
            {numPizzas > 0 ? (
                <>
                    <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
                    <ul className="pizzas">
                        {menu
                            
                            .map((pizzaData, index) => (
                                <Pizza
                                    key={index}
                                    index={index}
                                    data={pizzaData}
                                    selectPizza={selectPizza}
                                    selectedPizza={selectedPizza}
                                />
                        ))}
                    </ul>
                </>
            ) : (
                <p>We're still working on our menu. Please come back later :)</p>
            )}
        </div>
    );
}

// import React from "react";

// export default function Pizza({ data, index, selectPizza, selectedPizza }) {
//     const { name, price } = data;
//     const isSelected = selectedPizza === index; // Sprawdza, czy pizza jest wybrana

//     return (
//         <li className={`pizza ${isSelected ? 'selected' : ''}`} onClick={() => selectPizza(index)}>
//             <h3>{name}</h3>
//             <p>{price} USD</p>
//         </li>
//     );
// }