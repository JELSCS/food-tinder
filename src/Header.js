import React from "react";
import logo from './LogoH.PNG';
import "./Header.css";
import {BrowserRouter as Router, } from "react-router-dom";
import Navbar from "./index";


function Header() {
    return (

        <div className="header">

            <img src={logo} alt="Logo" />

        </div>

    );
}

export default Header;