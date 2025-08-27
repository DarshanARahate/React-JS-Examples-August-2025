
import React from "react";
import { useUser } from './UserContext';


function Footer() {
    const { user } = useUser();

    return (
        <footer style={{ padding: "10px", background: "#eee"  }} >
            <p>
                {
                    user.loggedIn ? `Logged in as ${user.name}` : 'Not logged in'
                }
            </p>
        </footer>
    );
}

export default  Footer;
