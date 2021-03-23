import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "@pages/home";

const Router = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route component={() => <div>Invalid URL</div>} />
  </Switch>
);

export default Router;
