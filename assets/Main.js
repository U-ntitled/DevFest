import React from 'react';
import {StrictMode } from "react";
import {createRoot } from "react-dom/client";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"


   
function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/login" /* action={loader} */ element={<Login/>} />
                <Route path="/signup"  element={<Signup/>} />
            </Routes>
        </Router>
    );
}
export default Main;  

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <Main />
    </StrictMode>
);