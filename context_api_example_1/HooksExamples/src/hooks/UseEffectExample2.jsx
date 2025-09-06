

import React, { useEffect, useState } from 'react';

export default function UseEffectExample2() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error fetching users: ", error);
            });
    }, []);

    if (loading) return <h3>Loading...</h3>

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}> { user.name } - { user.email }</li>
                    ))
                }
            </ul>
        </div>
    )
}


