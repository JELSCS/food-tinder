import React from "react";
import logo from './LogoH.PNG';
import "./Header.css";


function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo" />
        </div>
    );
}

export default Header;