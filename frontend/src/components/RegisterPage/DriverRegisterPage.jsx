import * as React from "react";
import "./DriverRegisterPage.css";
import TextField from "@mui/material/TextField";

const DriverRegisterPage = ({
    driverRegisterValues,
    setDriverRegisterValues,
}) => {
    function handleBgCheckChange(event) {
        setDriverRegisterValues({
            ...driverRegisterValues,
            background_check: event.target.value,
        });
    }

    function handleProfilePicChange(event) {
        setDriverRegisterValues({
            ...driverRegisterValues,
            profile_photo: event.target.value,
        });
    }

    function handleLicenseChange(event) {
        setDriverRegisterValues({
            ...driverRegisterValues,
            driver_license: event.target.value,
        });
    }

    function handleInsuranceChange(event) {
        setDriverRegisterValues({
            ...driverRegisterValues,
            vehicle_insurance: event.target.value,
        });
    }

    function handleRegistrationChange(event) {
        setDriverRegisterValues({
            ...driverRegisterValues,
            vehicle_registration: event.target.value,
        });
    }

    return (
        <>
            <h1 className="new">
                Hi <br /> User Registration
            </h1>
            <div className="driver_register_fields">
                <TextField
                    required
                    id="outlined-background-required"
                    label="Background Check"
                    placeholder="Background Check"
                    onChange={(e) => handleBgCheckChange(e)}
                />
                &nbsp; &nbsp;
                <TextField
                    required
                    id="outlined-profile-required"
                    label="Profile Photo"
                    placeholder="Profile Photo"
                    onChange={(e) => handleProfilePicChange(e)}
                />
            </div>
            <div className="driver_register_fields">
                <TextField
                    required
                    id="outlined-license-required"
                    label="Driver License"
                    placeholder="Driver License"
                    onChange={(e) => handleLicenseChange(e)}
                />
                &nbsp; &nbsp;
                <TextField
                    required
                    id="outlined-insurance-required"
                    label="Vehicle Insurance"
                    placeholder="Vehicle Insurance"
                    onChange={(e) => handleInsuranceChange(e)}
                />
            </div>
            <div className="driver_register_fields">
                <TextField
                    required
                    id="outlined-registration-required"
                    label="Vehicle Registration"
                    placeholder="Vehicle Registration"
                    onChange={(e) => handleRegistrationChange(e)}
                />
            </div>
        </>
    );
};

export default DriverRegisterPage;
