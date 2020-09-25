import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Books from "./pages/Games";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/Nav/nav-bar";
import Loading from "./components/Loading/loading";

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
          <Route exact path={["/", "/games"]}>
            <Books />
          </Route>
          <Route exact path="/games/:id">
            <Detail />
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
