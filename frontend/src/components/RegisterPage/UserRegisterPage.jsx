import * as React from "react";
import "./UserRegisterPage.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const UserRegisterPage = ({ userRegisterValues, setUserRegisterValues }) => {
    const [payment, setPayment] = React.useState("");
    const [isDriver, setIsDriver] = React.useState(false);

    function handleFirstNameChange(event) {
        setUserRegisterValues({
            ...userRegisterValues,
            first_name: event.target.value,
        });
    }

    function handleLastNameChange(event) {
        setUserRegisterValues({
            ...userRegisterValues,
            last_name: event.target.value,
        });
    }

    function handleEmailChange(event) {
        setUserRegisterValues({
            ...userRegisterValues,
            email: event.target.value,
        });
    }

    function handlePasswordChange(event) {
        setUserRegisterValues({
            ...userRegisterValues,
            password: event.target.value,
        });
    }

    function handlePhoneChange(event) {
        setUserRegisterValues({
            ...userRegisterValues,
            phone_number: event.target.value,
        });
    }

    function handleCityChange(event) {
        setUserRegisterValues({
            ...userRegisterValues,
            city: event.target.value,
        });
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
        setUserRegisterValues({
            ...userRegisterValues,
            payment_type: event.target.value,
        });
    }

    function handleDriverChange(event) {
        setIsDriver(event.target.value);
        setUserRegisterValues({
            ...userRegisterValues,
            is_driver: event.target.value,
        });
    }
    return (
        <>
            <h1 className="new">
                Hi <br /> User Registration
            </h1>
            <div className="user_register_fields">
                <TextField
                    required
                    id="outlined-first-required"
                    label="First Name"
                    placeholder="First Name"
                    onChange={(e) => handleFirstNameChange(e)}
                />
                &nbsp; &nbsp;
                <TextField
                    required
                    id="outlined-last-required"
                    label="Last Name"
                    placeholder="Last Name"
                    onChange={(e) => handleLastNameChange(e)}
                />
            </div>
            <div className="user_register_fields">
                <TextField
                    required
                    id="outlined-email-required"
                    label="Email"
                    placeholder="Email"
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
            <div className="user_register_fields">
                <TextField
                    required
                    id="outlined-phone-required"
                    label="+12345678910"
                    placeholder="Phone Number"
                    onChange={(e) => handlePhoneChange(e)}
                />
                &nbsp; &nbsp;
                <TextField
                    required
                    id="outlined-city-required"
                    label="City"
                    placeholder="City"
                    onChange={(e) => handleCityChange(e)}
                />
            </div>
            <div className="user_register_fields">
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
        </>
    );
};

export default UserRegisterPage;
