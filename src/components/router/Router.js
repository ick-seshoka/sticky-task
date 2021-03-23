import React from "react";

import { Switch, Route } from "react-router-dom";

const Router = () => (
  <Switch>
    <Route path="/" exact component={() => <div>Hello</div>} />
    <Route component={() => <div>Invalid URL</div>} />
  </Switch>
);

export default Router;
