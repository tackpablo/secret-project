import * as React from "react";
import "./MainPage.css";
import LoginButton from "../Buttons/LoginButton";
import RegisterButton from "../Buttons/RegisterButton";

const MainPage = () => {
    return (
        <div>
            <h1 className="welcome">
                Hi <br /> This is your Chauffeur
            </h1>
            <div className="buttons">
                <LoginButton />
                <RegisterButton />
            </div>
        </div>
    );
};

export default MainPage;
