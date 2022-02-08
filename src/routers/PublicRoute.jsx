import React from "react";
import { Redirect, Route } from "react-router";
import UseAuth from "../context/user/UseAuth";

function PublicRoute({ component: Component, ...rest }) {
  const auth = UseAuth();
  // const auth = null;
  return (
    <Route {...rest}>
      {!auth.isLogged() ? <Component /> : <Redirect to="/users" />}
      {/* {!auth ? <Component /> : <Redirect to="/" />} */}
    </Route>
  );
}

export default PublicRoute;
