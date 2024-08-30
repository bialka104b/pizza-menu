import React from "react";
import {Pizza} from "./index"

export default function Menu({
    menu = [],
    className = ''
}) {
    const numPizzas = menu.length;
    return (
        <div className={className}>
            <h2>Our menu</h2>
            {numPizzas > 0 ? (
                <>
                    <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
                    <ul className="pizzas">
                        {menu.map((pizzaData, index) => (
                            <Pizza data={pizzaData} key={index} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>We're still working on our menu. Please come back later :)</p>
            )}
        </div>
    );
}