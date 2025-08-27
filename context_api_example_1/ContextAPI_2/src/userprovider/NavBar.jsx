import React from 'react';
import UserStatus from './UserStatus';

function Navbar() {
    return (
        <nav style={{ padding: "10px", background: "#ccc" }}>
            <h3>My App</h3>
            <UserStatus />
        </nav>

    );
}

export default Navbar;
