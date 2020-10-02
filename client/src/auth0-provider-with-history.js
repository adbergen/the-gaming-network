import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

// require("dotenv").config();

const Auth0ProviderWithHistory = ({ children }) => {
  console.log("Auth0ProviderWithHistory");
  // const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  // const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const domain = "dev-m84-ys1b.us.auth0.com";
  const clientId = "hpq8xmhLqeXu9u36j2w0ZrVEjMS10vL9";
  console.log("domain", domain);
  console.log("clientId", clientId);
  const history = useHistory();
  console.log("history", history);

  const onRedirectCallback = (appState) => {
    console.log("onRedirectCallback", appState);
    
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
