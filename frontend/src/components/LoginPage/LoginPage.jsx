import * as React from "react";
import "./LoginPage.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { authContext } from "../../Providers/AuthProvider";

const LoginPage = () => {
    const { login } = React.useContext(authContext);

    const defaultLoginObj = {
        email: "",
        password: "",
    };

    const [loginValues, setLoginValues] = React.useState(defaultLoginObj);

    function handleEmailChange(event) {
        setLoginValues({ ...loginValues, email: event.target.value });
    }

    function handlePasswordChange(event) {
        setLoginValues({ ...loginValues, password: event.target.value });
    }

    return (
        <>
            <h1 className="welcome">
                Hi <br /> Welcome back
            </h1>
            <div className="login_fields">
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Email"
                    onChange={(e) => handleEmailChange(e)}
                />
                &nbsp; &nbsp;
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => handlePasswordChange(e)}
                />
            </div>
            <div className="login_btn">
                <Button
                    role="link"
                    variant="outlined"
                    onClick={() => login(loginValues)}
                >
                    Login
                </Button>
            </div>
        </>
    );
};

export default LoginPage;
