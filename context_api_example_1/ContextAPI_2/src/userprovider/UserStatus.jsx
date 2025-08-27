import React from 'react';
import { useUser } from './UserContext';

function UserStatus() {

    const { user, logout } = useUser();

    return user.loggedIn ? (
        <div>
            <span>Welcome, {user.name}.  </span>
            
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <span>Please Login</span>
    );
}

export default UserStatus;

