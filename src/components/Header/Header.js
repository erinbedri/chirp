import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.css";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
    const { user } = useContext(AuthContext);

    return (
        <header id="header" className="container-header sticky">
            <div className="header-logo">
                <Link to="/" className="logo-link">
                    <h2 className="medium-light-green">CHIRP</h2>
                </Link>
            </div>

            <div className="header-nav">
                <NavLink to="/posts">Posts</NavLink>

                {user.access_token ? (
                    <NavLink to="/logout">Logout</NavLink>
                ) : (
                    <>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </>
                )}
            </div>
        </header>
    );
}
