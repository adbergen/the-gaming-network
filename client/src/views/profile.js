import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// import profile from "./../assets/profile.png";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <>
        <h2>Welcome to your Profile</h2>
        <img
          src={user.picture}
          alt={user.name}
          style={{
            height: "auto",
            width: "10%",
            borderRadius: 50,

            // position: "absolute",
            // top: 0,
            // left: 0,
          }}
        />
        <h2 style={{ color: "black", fontSize: "14px", paddingTop: "1%" }}>
          Name: {user.name}
        </h2>
        <h2 style={{ color: "black", fontSize: "14px", marginBottom: "-2%" }}>
          Email: {user.email}{" "}
          <p
            style={{ float: "right", imageAlign: "right", paddingRight: "1%" }}
          >
            Member since: 20'
          </p>
        </h2>
      </>
    )
  );
};

export default Profile;
