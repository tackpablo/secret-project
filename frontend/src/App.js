import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/MainPage/MainPage";
import LoginPage from "./components/LoginPage/LoginPage";
import TransactionsPage from "./components/TransactionsPage/TransactionsPage";
import CallDriverList from "./components/CallDriverPage/CallDriverList";
import DriverPage from "./components/DriverPage/DriverPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import CodeVerificationPage from "./components/CodeVerificationPage/CodeVerificationPage";
import HorizontalLinearStepper from "./components/Stepper/Stepper";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route exact path="/" element={<MainPage />} />

        <Route
          path="/call"
          element={
            localStorage.getItem("user") != null ? (
              <CallDriverList />
            ) : (
              <MainPage />
            )
          }
        />
        <Route
          path="/transaction"
          element={
            localStorage.getItem("user") != null ? (
              <TransactionsPage />
            ) : (
              <MainPage />
            )
          }
        />
        <Route
          path="/profile"
          element={
            localStorage.getItem("user") != null ? (
              <ProfilePage />
            ) : (
              <MainPage />
            )
          }
        />
        <Route
          path="/driver"
          element={
            localStorage.getItem("user") != null ? <DriverPage /> : <MainPage />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<HorizontalLinearStepper />} />
        <Route path="/verify" element={<CodeVerificationPage />} />
        <Route path="/logout" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
