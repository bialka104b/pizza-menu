import React from "react";

export default function Header({
    className = ''
}) {
    return (
        <header className={className}>
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}