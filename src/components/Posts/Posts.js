import React, { useEffect, useState } from "react";

import Post from "../Post/Post";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/posts")
            .then((response) => response.json())
            .then((result) => setPosts(result));
    }, []);

    return (
        <div id="register" className="container">
            <h2>Posts</h2>

            {posts.map((post) => (
                <div className="post-item-wrapper" key={post.Post.id}>
                    <Post data={post} />
                </div>
            ))}
        </div>
    );
}
