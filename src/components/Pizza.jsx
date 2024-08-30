import React from "react";
import clsx from "clsx";

export default function Pizza({ data = null}) {
    return (
        <li className={clsx('pizza p-2', data.soldOut ? 'sold-out' : '')}>
            <img src={`${data.photoName}`} alt={ data.name} />
            <div>
                <h2>{data.name}</h2>
                <p>{data.ingredients}</p>
                <span>{!data.soldOut ? data.price: "SOLD OUT"}</span>  
            </div>
        </li>
    );
};
