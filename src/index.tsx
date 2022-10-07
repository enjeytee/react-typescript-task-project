import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const rootContainer = document.getElementById("root") as HTMLDivElement;

ReactDOM.createRoot(rootContainer).render(
    <App />
);