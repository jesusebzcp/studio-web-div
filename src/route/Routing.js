import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavBar from "../shared/NavBar";

const Routing = () => {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routing;
