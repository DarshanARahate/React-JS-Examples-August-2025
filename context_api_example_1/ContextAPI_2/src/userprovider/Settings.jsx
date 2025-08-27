
import React from 'react';
import { useUser  } from './UserContext';

function Settings() {
    const {user, login } = useUser();

    return (
        <div style={{ padding: '10px' }}>
            <h2>Settings</h2>
            {
                !user.loggedIn && (
                    <button onClick={() => login("NewUser")} > Login as NewUser  </button>
                )
            }
        </div>
    );
}

export default Settings;
