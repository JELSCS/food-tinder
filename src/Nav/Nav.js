import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Login">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>

                </div>
            </nav>
        </div>
    );
}

export default Nav;