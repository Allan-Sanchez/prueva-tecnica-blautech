import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// routes
import Login from "../pages/Login";
import Users from "../pages/Users";
import Error404 from "../pages/Error404";
// router
import PublicRouter from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
function AppRouter() {
  return (
      <Router>
        <Switch>
          <PublicRouter exact path="/" component={Login} />
          <PrivateRoute exact path="/users" component={Users} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
  );
}

export default AppRouter;
