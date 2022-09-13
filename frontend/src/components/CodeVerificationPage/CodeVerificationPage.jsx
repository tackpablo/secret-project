import * as React from "react";
import "./CodeVerificationPage.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CodeVerificationPage = () => {
    const defaultVerifyObj = {
        text_code: "",
    };

    const [verificationValue, setVerificationValue] =
        React.useState(defaultVerifyObj);

    function handleVerifyChange(event) {
        setVerificationValue({
            text_code: event.target.value,
        });
    }

    function verifyHandler(verificationValue) {}

    return (
        <>
            <h1 className="verify">
                Hi <br /> Verify your account
            </h1>
            <div className="verify_fields">
                <TextField
                    required
                    id="outlined-verify-required"
                    label="Verification Code"
                    defaultValue="Code"
                    onChange={(e) => handleVerifyChange(e)}
                />
            </div>
            <div className="verify_btn">
                <Button
                    role="link"
                    variant="outlined"
                    onClick={() => {
                        verifyHandler(verificationValue);
                    }}
                >
                    Verify
                </Button>
            </div>
        </>
    );
};

export default CodeVerificationPage;
