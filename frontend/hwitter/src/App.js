import React from "react";
import "./App.css";
import Modal from "react-modal";
import NavBar from "./Components/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import AuthProvder from "./Providers/AuthProvider";
import { AuthRoute, ProtectedRoute } from "./Util/routesUtil";
import UserHweet from "./Components/UserHweet";

Modal.setAppElement("#root");
function App() {

  return (
    
    <div className="App">
      <AuthProvder>
        <NavBar />
        <Switch>
          {/* <ProtectedRoute path="/profile">
            <UserHweet />
          </ProtectedRoute> */}


          <ProtectedRoute exact path="/users">
            <Users />
          </ProtectedRoute>
          <AuthRoute path="/signup">
            <SignUp />
          </AuthRoute>
          <AuthRoute path="/login">
            <Login />
          </AuthRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </AuthProvder>
    </div>
  );
}

export default App;
