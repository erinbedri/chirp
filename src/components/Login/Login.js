import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({ email: "", password: "" });

    const changeHandler = (e) => {
        setLoginData((oldData) => ({
            ...oldData,
            [e.target.name]: e.target.type == "checkbox" ? e.target.checked : e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        let formdata = new FormData();
        formdata.append("username", loginData.email);
        formdata.append("password", loginData.password);

        let requestOptions = {
            method: "POST",
            body: formdata,
        };

        if (loginData.email == "" || loginData.password == "") {
            return;
        }

        fetch("http://127.0.0.1:8000/login", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then((result) => {
                userLogin(result);
                navigate("/posts");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div id="login" className="container-form">
            <h2>Login</h2>

            <form className="form login-form" onSubmit={onSubmit}>
                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input type="email" placeholder="Enter Email" name="email" onChange={changeHandler} required />
                <label htmlFor="password">
                    <b>Password</b>
                </label>
                <input type="password" placeholder="Enter Password" name="password" onChange={changeHandler} required />
                <button className="btn" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}
