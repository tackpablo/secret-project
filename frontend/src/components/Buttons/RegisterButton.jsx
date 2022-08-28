import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const RegisterButton = () => {
    return (
        <Link to={`/register`}>
            <Button role="link" variant="outlined">
                Register
            </Button>
        </Link>
    );
};

export default RegisterButton;
