import React from "react";

export default function Order({ closeHour, openHour, handleOrder, selectedPizza }) { 
    
    return (
        <div className="order">
            <p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
            <button className="btn" onClick={() => handleOrder()}>Order</button>
            {selectedPizza ? (
                <div>
                    <p>You ordered: {selectedPizza.name}</p>
                    <p>Total price: {selectedPizza.price} USD</p>
                </div>
            ) : (
                <p>Please select a pizza to order.</p>
            )}
        </div>
    );
}