import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import UsersProvider from "./Providers/UsersProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CookiesProvider>
        <UsersProvider>
            <App />
        </UsersProvider>
    </CookiesProvider>
);
