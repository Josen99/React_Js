import React from "react";

const Profile=({user})=>{

    return(
       <div>
        <h2>Profile</h2>
        <p>Name :{user.name}</p>
       </div>
    );
};

export default Profile;