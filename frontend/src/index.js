import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes />
    </Router>
);
