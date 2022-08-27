import * as React from "react";
import "./LoginPage.css";
import LoginButton from "../Buttons/LoginButton";
import TextField from "@mui/material/TextField";

const LoginPage = () => {
    return (
        <div>
            <h1 className="welcome">
                Hi <br /> Welcome back
            </h1>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Email"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
            </div>
            <div className="buttons">
                <LoginButton />
            </div>
        </div>
    );
};

export default LoginPage;
