import React, { useState } from "react";

import "./register.css";
import * as requester from "../../services/requester";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        repeatPassword: "",
    });

    const changeHandler = (e) => {
        setFormData((oldData) => ({
            ...oldData,
            [e.target.name]: e.target.type == "checkbox" ? e.target.checked : e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.repeatPassword) {
            return;
        }

        requester
            .post("http://127.0.0.1:8000/users", { email: formData.email, password: formData.password })
            .then((response) => {
                navigate("/login");
            });
        return;
    };

    return (
        <div id="register" className="container-form">
            <h2>Register</h2>

            <form className="form register-form" onSubmit={onSubmit}>
                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input type="email" placeholder="Enter Email" name="email" onChange={changeHandler} required />
                <label htmlFor="password">
                    <b>Password</b>
                </label>
                <input type="password" placeholder="Enter Password" name="password" onChange={changeHandler} required />
                <label htmlFor="repeatPassword">
                    <b>Repeat Password</b>
                </label>
                <input
                    type="password"
                    placeholder="Enter Password Again"
                    name="repeatPassword"
                    onChange={changeHandler}
                    required
                />

                <button className="btn" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}
