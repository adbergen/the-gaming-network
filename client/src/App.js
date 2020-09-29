import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import Chat from "./pages/Chat";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/Nav/nav-bar";
import Loading from "./components/Loading/loading";
import Home from "./pages/Home";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={["/dashboard", "/games"]}>
            <Dashboard />
          </Route>
          <Route exact path="/dashboard/:id">
            <Detail />
          </Route>
          <Route exact path={("/", "/chat")}>
            <Chat />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
