import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import profile from "../../assets/profile.png";
import Card from "react-bootstrap/Card";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="justfiy-content-end">
        <br />
        <img
          src={profile}
          alt={user.name}
          style={{ height: "auto", width: "5%" }}
        />
        <br />
        <h2 style={{ color: "black", fontSize: "12px" }}>Name: {user.name}</h2>
        <h2 style={{ color: "black", fontSize: "12px" }}>
          Email: {user.email}
        </h2>
      </div>
    )
  );
};

export default Profile;
