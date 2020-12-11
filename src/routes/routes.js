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
        {/* <Route exact path="/transaction" component={Tansaction} />
        <Route exact path="/Transfer" component={Transfer} /> */}

        <Redirect push to="/login" />
      </Switch>
    </BrowserRouter>
  );
}
