import * as React from "react";
import "./UserRegisterPage.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { authContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const UserRegisterPage = () => {
    const { registerHandler } = React.useContext(authContext);
    const navigate = useNavigate();

    const defaultRegisterObj = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone_number: "",
        city: "",
        payment_type: "CASH" || "CARD",
        is_driver: false,
    };

    const [registerValues, setRegisterValues] =
        React.useState(defaultRegisterObj);
    const [payment, setPayment] = React.useState("");
    const [isDriver, setIsDriver] = React.useState(false);

    function handleFirstNameChange(event) {
        setRegisterValues({
            ...registerValues,
            first_name: event.target.value,
        });
    }

    function handleLastNameChange(event) {
        setRegisterValues({
            ...registerValues,
            last_name: event.target.value,
        });
    }

    function handleEmailChange(event) {
        setRegisterValues({
            ...registerValues,
            email: event.target.value,
        });
    }

    function handlePasswordChange(event) {
        setRegisterValues({
            ...registerValues,
            password: event.target.value,
        });
    }

    function handlePhoneChange(event) {
        setRegisterValues({
            ...registerValues,
            phone_number: event.target.value,
        });
    }

    function handleCityChange(event) {
        setRegisterValues({
            ...registerValues,
            city: event.target.value,
        });
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
        setRegisterValues({
            ...registerValues,
            payment_type: event.target.value,
        });
    }

    function handleDriverChange(event) {
        setIsDriver(event.target.value);
        setRegisterValues({
            ...registerValues,
            is_driver: event.target.value,
        });
    }
    return (
        <>
            <h1 className="new">
                Hi <br /> Register Here
            </h1>
            <div className="login_fields">
                <TextField
                    required
                    id="outlined-first-required"
                    label="First Name"
                    defaultValue="First Name"
                    onChange={(e) => handleFirstNameChange(e)}
                />
                &nbsp; &nbsp;
                <TextField
                    required
                    id="outlined-last-required"
                    label="Last Name"
                    defaultValue="Last Name"
                    onChange={(e) => handleLastNameChange(e)}
                />
            </div>
            <div className="login_fields">
                <TextField
                    required
                    id="outlined-email-required"
                    label="Email"
                    defaultValue="Email"
                    onChange={(e) => handleEmailChange(e)}
                />
                &nbsp; &nbsp;
                <TextField
                    required
                    id="outlined-password-required"
                    label="Password"
                    type="password"
                    onChange={(e) => handlePasswordChange(e)}
                />
            </div>
            <div className="login_fields">
                <TextField
                    required
                    id="outlined-phone-required"
                    label="+12345678910"
                    defaultValue="Phone Number"
                    onChange={(e) => handlePhoneChange(e)}
                />
                &nbsp; &nbsp;
                <TextField
                    required
                    id="outlined-city-required"
                    label="City"
                    defaultValue="City"
                    onChange={(e) => handleCityChange(e)}
                />
            </div>
            <div className="login_fields">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-payment-label">
                        Payment Type
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-payment-label"
                        id="demo-simple-select-helper"
                        value={payment}
                        label="Payment"
                        onChange={handlePaymentChange}
                    >
                        <MenuItem value="">
                            <em>Select</em>
                        </MenuItem>
                        <MenuItem value="CASH">Cash</MenuItem>
                        <MenuItem value="CARD">Card</MenuItem>
                    </Select>
                    <FormHelperText>Primary Payment Method</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-driver-label">
                        Driver Option
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-driver-label"
                        id="demo-simple-driver-helper"
                        value={isDriver}
                        label="Driver"
                        onChange={handleDriverChange}
                    >
                        <MenuItem value="true">True</MenuItem>
                        <MenuItem value="false">False</MenuItem>
                    </Select>
                    <FormHelperText>Will you be a driver?</FormHelperText>
                </FormControl>
            </div>

            <div className="register_btn">
                <Button
                    role="link"
                    variant="outlined"
                    onClick={() => {
                        registerHandler(registerValues);
                        navigate("/call");
                    }}
                >
                    Register
                </Button>
            </div>
        </>
    );
};

export default UserRegisterPage;
