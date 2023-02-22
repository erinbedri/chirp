import React from "react";

import "./home.css";

export default function Home() {
    return (
        <div id="home" className="container">
            <div className="home-title">
                <h1>
                    Welcome to <span className="medium-light-green">Chirp</span>
                </h1>
                <h3>
                    the social networking app that lets you share short messages and connect with others in real time.
                </h3>
            </div>

            <div className="home-desc">
                <p>Here's what you can do with Chirp:</p>
                <ul>
                    <li>Share your thoughts and ideas with short messages or "chirps" of up to 280 characters.</li>
                    <li>Follow other users and stay up to date on their latest chirps and content.</li>
                    <li>Like and comment on chirps to engage with other users and join the conversation.</li>
                    <li>Share content with your own followers and expand your network of connections</li>
                </ul>
                <p>
                    Chirp is perfect for anyone who wants to stay connected and share their passions with others. Our
                    app is designed for people of all ages and interests, from students and professionals to artists and
                    entrepreneurs. But don't just take our word for it.
                </p>
            </div>

            <div className="home-testimonials">
                <p>Here's what our users have to say about Chirp:</p>

                <h3>ADD TESTIMONIALS HERE</h3>
            </div>

            <div className="home-desc">
                <p>
                    Ready to start chirping? Register now and follow our step-by-step tutorials to get started. With
                    thousands of chirps shared every day, Chirp is the place to be for real-time communication and
                    connection.
                </p>
                <p>Join the conversation today and see what all the buzz is about!</p>
            </div>
        </div>
    );
}
