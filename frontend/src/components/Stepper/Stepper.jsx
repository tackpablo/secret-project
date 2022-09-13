import * as React from "react";
import "./Stepper.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UserRegisterPage from "../RegisterPage/UserRegisterPage";
import DriverRegisterPage from "../RegisterPage/DriverRegisterPage";
import CodeVerificationPage from "../CodeVerificationPage/CodeVerificationPage";
import { authContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [isDriver, setIsDriver] = React.useState("");
    const { registerHandler } = React.useContext(authContext);
    const navigate = useNavigate();

    const defaultUserRegisterObj = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone_number: "",
        city: "",
        payment_type: "CASH" || "CARD",
        is_driver: false,
    };

    const [userRegisterValues, setUserRegisterValues] = React.useState(
        defaultUserRegisterObj
    );

    const defaultDriverRegisterObj = {
        background_check: "",
        profile_photo: "",
        driver_license: "",
        vehicle_insurance: "",
        vehicle_registration: "",
        joined_date: Date.now(),
    };

    const [driverRegisterValues, setDriverRegisterValues] = React.useState(
        defaultDriverRegisterObj
    );

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const steps = [
        {
            name: "Register as user",
            component: (
                <UserRegisterPage
                    handleNext={handleNext}
                    isDriver={isDriver}
                    setIsDriver={setIsDriver}
                    userRegisterValues={userRegisterValues}
                    setUserRegisterValues={setUserRegisterValues}
                />
            ),
        },
        {
            name: "Register as driver",
            component: (
                <DriverRegisterPage
                    isDriver={isDriver}
                    userRegisterValues={userRegisterValues}
                    driverRegisterValues={driverRegisterValues}
                    setDriverRegisterValues={setDriverRegisterValues}
                />
            ),
        },
        { name: "Code Verification", component: <CodeVerificationPage /> },
    ];

    return (
        <div className="stepper">
            <Box sx={{ width: "80%" }} padding="1em">
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">
                                    Optional
                                </Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={index} {...stepProps}>
                                <StepLabel
                                    {...labelProps}
                                    onClick={handleStep(index)}
                                >
                                    {label.name}
                                </StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                        >
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }} component={"span"}>
                            {steps[activeStep].component}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                        >
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: "1 1 auto" }} />
                            {isStepOptional(activeStep) &&
                                !userRegisterValues.is_driver && (
                                    <Button
                                        color="inherit"
                                        onClick={handleSkip}
                                        sx={{ mr: 1 }}
                                    >
                                        Skip
                                    </Button>
                                )}

                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1
                                    ? "Finish"
                                    : // <Button
                                      //     role="link"
                                      //     variant="outlined"
                                      //     onClick={() => {
                                      //         registerHandler(
                                      //             userRegisterValues,
                                      //             driverRegisterValues
                                      //         );
                                      //         navigate("/call");
                                      //     }}
                                      // >
                                      //     Register
                                      // </Button>
                                      "Next"}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
}
