import React from 'react';
import { useUser } from "./UserContext";


function Profile() {
    const { user } = useUser();

    return (
        <div>
            <h2>Profile</h2>
            {
                user.loggedIn ? (
                    <p>Name: {user.name} </p>
                ) : (
                    <p>No User logged in</p>
                )
            }
        </div>
    );
}


export default Profile;