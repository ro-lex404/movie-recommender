import "../styles/index.scss";  // Fixed path - go up one level
import "../styles/login.scss";   // Fixed path - go up one level
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Login from "./Login.jsx";
import MovieBox from "./MovieBox.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/MovieBox" element={<MovieBox />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);