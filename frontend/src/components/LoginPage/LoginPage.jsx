import * as React from "react";
import "./LoginPage.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { authContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { loginHandler, loginError, setLoginError } =
    React.useContext(authContext);
  const navigate = useNavigate();

  const defaultLoginObj = {
    email: "",
    password: "",
  };

  const [loginValues, setLoginValues] = React.useState(defaultLoginObj);

  function handleEmailChange(event) {
    if (event.target.value.length > 0) {
      setLoginError(false);
      setLoginValues({ ...loginValues, email: event.target.value });
    } else {
      setLoginError(true);
    }
  }

  function handlePasswordChange(event) {
    if (event.target.value.length > 0) {
      setLoginError(false);
      setLoginValues({ ...loginValues, password: event.target.value });
    } else {
      setLoginError(true);
    }
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
      {loginError && (
        <Stack sx={{ width: "100%" }}>
          <Alert
            sx={{
              marginTop: "15px",
              width: "50%",
              alignSelf: "center",
            }}
            severity="error"
          >
            Required fields are missing.
          </Alert>
        </Stack>
      )}
      <div className="login_btn">
        <Button
          disabled={loginError}
          role="link"
          variant="outlined"
          onClick={() => {
            loginHandler(loginValues);
            navigate("/call");
          }}
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default LoginPage;
