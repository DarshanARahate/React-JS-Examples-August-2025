import axios from "axios";
import React, { useState, useEffect } from "react";

export default function HookCounter11() {
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);
    const [post, setPost] = useState({});

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick} >Fetch Post</button>
            <div>Title : {post.title}</div>

        </div>
    )
}

 