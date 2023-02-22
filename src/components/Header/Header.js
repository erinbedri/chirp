import React from "react";

import "./header.css";

export default function Header() {
    return (
        <header id="header" className="container-header sticky">
            <div className="header-logo">
                <h3>
                    <a href="#">LOGO</a>
                </h3>
            </div>

            <div className="header-controls">
                <ul className="main-nav" role="list">
                    <li className="nav-item">
                        <a href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Register</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
