import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/MainPage/MainPage";
import LoginPage from "./components/LoginPage/LoginPage";
import UserRegisterPage from "./components/RegisterPage/UserRegisterPage";
import TransactionsPage from "./components/TransactionsPage/TransactionsPage";
import CallDriverList from "./components/CallDriverPage/CallDriverList";
import DriverPage from "./components/DriverPage/DriverPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
            </div>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/welcome" element={<CallDriverList />} />
                <Route path="/call" element={<CallDriverList />} />
                <Route path="/transaction" element={<TransactionsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/driver" element={<DriverPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<UserRegisterPage />} />
                <Route path="/logout" element={<MainPage />} />
            </Routes>
        </Router>
    );
}

export default App;
