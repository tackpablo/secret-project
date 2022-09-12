export async function loginHandler(
    loginValues,
    setLoggedInUser,
    setCurrentUser,
    loggedInUser,
    login,
    currentUser
) {
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

        console.log("DATA: ", data.results.rows[0]);
        setLoggedInUser(data.results.rows[0]);

        setCurrentUser(loggedInUser);
        login(currentUser.email);

        // console.log("ALLUSERS: ", allUsers);
    } catch (err) {
        console.log(err);
    }
}

export async function registerHandler(registerValues) {
    try {
        const url = `http://localhost:8080/register`;
        console.log("REGISTER: ", registerValues);
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(registerValues),
        });

        const data = await response.json();

        console.log("DATA: ", data);
    } catch (err) {
        console.log(err);
    }
}
