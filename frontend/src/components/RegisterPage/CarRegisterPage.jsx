import * as React from "react";
import "./CarRegisterPage.css";
import TextField from "@mui/material/TextField";

const CarRegisterPage = ({ carRegisterValues, setCarRegisterValues }) => {
    function handleBrandChange(event) {
        setCarRegisterValues({
            ...carRegisterValues,
            brand: event.target.value,
        });
    }

    function handleModelChange(event) {
        setCarRegisterValues({
            ...carRegisterValues,
            model: event.target.value,
        });
    }

    function handleTypeChange(event) {
        setCarRegisterValues({
            ...carRegisterValues,
            type: event.target.value,
        });
    }

    return (
        <>
            <div className="car_register_fields">
                <TextField
                    required
                    id="outlined-brand-required"
                    label="Car Brand"
                    placeholder="Car Brand"
                    onChange={(e) => handleBrandChange(e)}
                />
                &nbsp; &nbsp;
                <TextField
                    required
                    id="outlined-model-required"
                    label="Car Model"
                    placeholder="Car Model"
                    onChange={(e) => handleModelChange(e)}
                />
            </div>
            <div className="car_register_fields">
                <TextField
                    required
                    id="outlined-brand-required"
                    label="Car Type"
                    placeholder="Car Type"
                    onChange={(e) => handleTypeChange(e)}
                />
            </div>
        </>
    );
};

export default CarRegisterPage;
