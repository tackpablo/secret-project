import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const LoginButton = () => {
    return (
        <Link to={`/login`}>
            <Button role="link" variant="outlined">
                Login
            </Button>
        </Link>
    );
};

export default LoginButton;
