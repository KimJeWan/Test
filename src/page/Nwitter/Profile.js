import React from "react";
import { authService } from "../../Config/Firebase";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <>
          <button onClick={()=>authService.signOut()}><Link to='/nwitter'>Log Out</Link></button>
        </>
    )
}

export default Profile