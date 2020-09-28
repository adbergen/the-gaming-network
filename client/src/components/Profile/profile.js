import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import profile from "../../assets/profile.png";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div class="justfiy-content-end">
        <br />
        <img
          src={profile}
          alt={user.name}
          style={{ height: "auto", width: "5%" }}
        />
        <br />
        <h2 style={{ color: "white", fontSize: "12px" }}>{user.name}</h2>
        <p style={{ color: "white", fontSize: "12px" }}>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
