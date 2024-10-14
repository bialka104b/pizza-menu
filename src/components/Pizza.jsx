import React from "react";
import clsx from "clsx";

export default function Pizza({ data = null, index, selectPizza, selectedPizza }) {
    const { name, price, soldOut } = data;
    const isSelected = selectedPizza === index; // Sprawdza, czy pizza jest wybrana
    return (
        <li className={clsx('pizza p-2', soldOut ? 'sold-out' : '', isSelected ? 'selected' : '')} onClick={() => !soldOut && selectPizza(index)}>
            <img src={`${data.photoName}`} alt={ name} />
            <div>
                <h2>{name}</h2>
                <p>{data.ingredients}</p>
                <span>{!soldOut ? price: "SOLD OUT"}</span>  
            </div>
        </li>
    );
};
