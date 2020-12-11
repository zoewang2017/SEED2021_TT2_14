import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Overview from "../views/dashboard";
import Login from "../Login.js";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/overview" component={Overview} />
        <Route exact path="/login" component={Login} />


        <Redirect push to="/overview" />
      </Switch>
    </BrowserRouter>
  );
}
