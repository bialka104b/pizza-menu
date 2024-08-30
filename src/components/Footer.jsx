import React from "react";
import {Order} from "./index"

export default function Footer({className =''}) {
    const hour = new Date().getHours()
    const openHour = 8;
    const closeHour = 23;
    const isOpen = openHour <= hour && hour < closeHour;

    return (
        <footer className={className}>
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour}/>
            ) : (
                <p className="text-center">We're happy to welcome you between  {openHour}:00 and {closeHour}:00.</p>
            )}
        </footer>
    );
}