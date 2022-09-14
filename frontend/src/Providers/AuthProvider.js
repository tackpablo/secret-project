import { createContext } from "react";

export const authContext = createContext();

export default function AuthProvider(props) {
    // Register user
    const userRegisterHandler = async (registerValues) => {
        try {
            const url = `http://localhost:8080/register`;
            console.log("USERREGISTERVALUES: ", registerValues);
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

    // Register driver
    const driverRegisterHandler = async (driverRegisterValues) => {
        // try {
        //     const url = `http://localhost:8080/register`;
        //     console.log("DRIVERREGISTERVALUES: ", driverRegisterValues);
        //     const response = await fetch(url, {
        //         method: "POST",
        //         headers: {
        //             "Content-type": "application/json",
        //         },
        //         body: JSON.stringify(driverRegisterValues),
        //     });
        //     const data = await response.json();
        //     const userData = data.results.rows[0];
        //     return response.data;
        // } catch (err) {
        //     console.log(err);
        // }
    };

    // Register car
    const carRegisterHandler = async (carRegisterValues) => {
        // try {
        //     const url = `http://localhost:8080/register`;
        //     console.log("REGISTERVALUES: ", carRegisterValues);
        //     const response = await fetch(url, {
        //         method: "POST",
        //         headers: {
        //             "Content-type": "application/json",
        //         },
        //         body: JSON.stringify(carRegisterValues),
        //     });
        //     const data = await response.json();
        //     const userData = data.results.rows[0];
        //     return response.data;
        // } catch (err) {
        //     console.log(err);
        // }
    };

    // Login user
    const loginHandler = async (loginValues) => {
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
    const logoutHandler = () => {
        localStorage.removeItem("user");
    };

    const userData = {
        loginHandler,
        logoutHandler,
        userRegisterHandler,
        driverRegisterHandler,
        carRegisterHandler,
    };

    return (
        <authContext.Provider value={userData}>
            {props.children}
        </authContext.Provider>
    );
}
