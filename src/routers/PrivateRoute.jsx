import React from "react";
import { Redirect, Route } from "react-router";
import UseAuth from "../context/user/UseAuth";
function PrivateRoute({ component: Component, ...rest }) {
  const auth = UseAuth();
  // const auth = null;

  return (
    <Route {...rest}>
      {auth.isLogged() ? <Component /> : <Redirect to="/" />}
      {/* {auth ? <Component /> : <Redirect to="/users" />} */}
    </Route>
  );
}

export default PrivateRoute;
