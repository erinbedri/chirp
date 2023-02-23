import React from "react";

import "./post.css";

export default function Post({ data }) {
    let options = {
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        second: "numeric",
        month: "long",
        day: "numeric",
    };

    const date = new Date(data.Post.created_at);
    const formatedDate = new Intl.DateTimeFormat("en-EN", options).format(date);

    return (
        <div className="post-item">
            <p>
                <b>User: </b>
                {data.Post.owner.email}
            </p>
            <p>
                <b>Title: </b>
                {data.Post.title}
            </p>
            <p>
                <b>Content: </b>
                {data.Post.content}
            </p>
            <p>
                <b>Date: </b>
                {formatedDate}
            </p>
            <p>
                <b>Votes: </b>
                {data.votes}
            </p>

            <div className="controls">
                <i className="fa-solid fa-comment" />
                <i className="fa-solid fa-heart" />
                <i className="fa-solid fa-pen-to-square" />
            </div>
        </div>
    );
}
