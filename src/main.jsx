import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

function Main() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) html.classList.add("dark");
        else html.classList.remove("dark");
    }, [darkMode]);

    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <BrowserRouter>
                <App darkMode={darkMode} setDarkMode={setDarkMode} />;
            </BrowserRouter>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
