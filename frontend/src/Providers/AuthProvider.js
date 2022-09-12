import { createContext, useState, useEffect } from "react";

export const authContext = createContext();

export default function AuthProvider(props) {
    // Register user
    const register = async (registerValues) => {
        try {
            const url = `http://localhost:8080/register`;
            console.log("LOGINVALUES: ", registerValues);
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(registerValues),
            });

            const data = await response.json();
            const userData = data.results.rows[0];
            localStorage.setItem("user", JSON.stringify(userData.email));

            return response.data;
        } catch (err) {
            console.log(err);
        }
    };

    // Login user
    const login = async (loginValues) => {
        try {
            const url = `http://localhost:8080/login`;
            console.log("LOGINVALUES: ", loginValues);
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(loginValues),
            });

            const data = await response.json();
            const userData = data.results.rows[0];
            localStorage.setItem("user", JSON.stringify(userData.email));

            return response.data;
        } catch (err) {
            console.log(err);
        }
    };

    // Logout user
    const logout = () => {
        localStorage.removeItem("user");
    };

    const userData = {
        login,
        logout,
        register,
    };

    return (
        <authContext.Provider value={userData}>
            {props.children}
        </authContext.Provider>
    );
}
