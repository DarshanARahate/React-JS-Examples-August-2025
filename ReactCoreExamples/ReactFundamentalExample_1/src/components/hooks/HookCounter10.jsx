import axios from "axios";
import React, { useState, useEffect } from "react";

export default function HookCounter10() {
    const [id, setId] = useState(1);
    const [post, setPost] = useState({});


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <div>{post.title}</div>

        </div>
    )
}









