import React from 'react';
import {StrictMode } from "react";
import {createRoot } from "react-dom/client";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import About from './pages/About';
import SectionAbout from './pages/Section';
import SectionProject from './pages/SectionProject';
import { ProSidebarProvider } from 'react-pro-sidebar';
import SidebarC from './pages/SidBarPro';
import Profil from './pages/Profil';
import Edit from './pages/Edit';
// import Dashboard from './pages/';
import HomeL from './pages/homeL';
import Event from './pages/Event';


   
function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/actu" element={<HomeL/>} />
                <Route path="/about" element={<SectionAbout/>} />
                <Route path="/login" /* action={loader} */ element={<Login/>} />
                <Route path="/project" /* action={loader} */ element={<SectionProject/>} />
                <Route path="/signup"  element={<Signup/>} />
                <Route path="/actu/Myaccount/:id" element={<ProSidebarProvider><SidebarC/></ProSidebarProvider>}>
                      <Route path="/actu/Myaccount/:id/profile" element={<Profil/>} />
                      <Route path="/actu/Myaccount/:id/edit" element={<Edit/>}/>
                      <Route path="/actu/Myaccount/:id" element={<Profil/>}/> 
                      <Route path="/actu/Myaccount/:id/event" element={<Event/>}/>
                </Route>
                {/* <Route path="/dashboard/:id" element={<Dashboard/>}/> */}
                
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