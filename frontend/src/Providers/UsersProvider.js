import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { getUserByID } from "../helpers/selectors";

export const usersContext = createContext();

export default function UsersProvider(props) {
    const [allUsers, setAllUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [cookies, setCookie, removeCookie] = useCookies(null);

    // Retrieve all users
    useEffect(() => {
        userList();
    }, []);

    // Retrieve all users
    async function userList() {
        try {
            const url = "http://localhost:8080/api/users";
            const response = await fetch(url);

            const data = await response.json();

            setAllUsers(data);
        } catch (err) {
            console.log("ERROR FETCHING USERS DATA", err);
        }
    }

    // Sets specific user by using cookie ID
    // useEffect(() => {
    //     setCurrentUser(getUserByID(cookies.id, allUsers));
    // }, [allUsers]);

    const login = function (id) {
        setCookie("id", id, { path: "/" });
    };

    const logout = function () {
        removeCookie("id");
    };

    const userData = {
        cookies,
        allUsers,
        setAllUsers,
        login,
        logout,
        getUserByID,
        currentUser,
        setCurrentUser,
    };

    return (
        <usersContext.Provider value={userData}>
            {props.children}
        </usersContext.Provider>
    );
}
