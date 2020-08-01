import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


//if you are logged in this is the page you'll be going to
export const AuthRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !currentUser ? children : <Redirect to="/" />;
      }}
    />
  );
};


//not logged in
export const ProtectedRoute = ({ children, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return (
      <Route
        {...rest}
        render={({ location }) => {
          return currentUser ? children : <Redirect to="/login" />;
        }}
      />
    );
  };
