import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileWelcome = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="justfiy-content-end">
        <h2 style={{ color: "white", fontSize: "14px", padding: 10 }}>
          Welcome {user.name}!
        </h2>
      </div>
    )
  );
};

export default ProfileWelcome;
