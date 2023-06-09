import './App.css';
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import React from "react";
import Preferences from "./pages/Preferences";
import Login from "./pages/Login";
import NewPreference from "./pages/NewPreference";

export default function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="countries" element={<Countries />} />
                <Route path="preferences" element={<Preferences />} />
                <Route path="profile" element={<Profile />} />
                <Route path="login" element={<Login />} />
                <Route path="/NewPreference" element={<NewPreference />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    </BrowserRouter>)
}

ReactDOM.render(<App />, document.getElementById("root"));


