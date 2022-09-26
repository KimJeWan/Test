import React from "react";
import { Link  } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/nwitter'>nwiiter Home</Link></li>
                <li><Link to='/nwitter/profile'>Profile</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation