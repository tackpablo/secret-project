import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/MainPage/MainPage";
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
                <Route path="/call" element={<CallDriverList />} />
                <Route path="/transaction" element={<TransactionsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/driver" element={<DriverPage />} />
                <Route path="/logout" element={<MainPage />} />
            </Routes>
        </Router>
    );
}

export default App;
