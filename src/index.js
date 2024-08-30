import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import { Menu, Footer, Header } from "./components/index";
import './index.css'

function App(params) {
    // const pizzaDat = []
    return (
        <div className="max-w-7xl my-0 mx-auto flex flex-col  gap-[4.8rem]">
            <Header className="header" />
            <Menu menu={pizzaData} className="menu" />
            <Footer className="footer" />
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
