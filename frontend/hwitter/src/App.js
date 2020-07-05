import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import AuthProvder from "./Providers/AuthContext";
import LayOut from "./Components/LayOut";
import { AuthRoute, ProtectedRoute } from "./Util/routesUtil";

function App() {
  return (
    <div className="App">
      <Navigation />
      <LayOut>
      <AuthProvder>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <ProtectedRoute path="/users">
            <Users />
          </ProtectedRoute>
          <AuthRoute path="/signup">
            <SignUp />
          </AuthRoute>
          <AuthRoute path="/login">
            <Login />
          </AuthRoute>
          {/* would need to add an error page eventually */}
        </Switch>
      </AuthProvder>
      </LayOut>
    </div>
  );
}

export default App;
