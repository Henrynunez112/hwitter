import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Modal from "react-modal";
import NavBar from "./Components/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import SearchResults from "./Components/SearchResults";
// import SearchBar from "./Components/SearchBar"
import Users from "./Components/Users";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import AuthProvder from "./Providers/AuthProvider";
import { AuthRoute, ProtectedRoute } from "./Util/routesUtil";
import IndividualUsers from "./Components/IndividualUsers";

function App() {
  return (
    <div className="App">
      <AuthProvder>
        <NavBar />
        <Switch>
          <ProtectedRoute exact path="/users">
            <Home />
          </ProtectedRoute>
          <ProtectedRoute exact path="/users/:id">
            <IndividualUsers />
          </ProtectedRoute>
          <ProtectedRoute exact path="/hweet">
            <Users />
          </ProtectedRoute>
          <ProtectedRoute exact path="/search/:search">
            <SearchResults />
          </ProtectedRoute>
          <AuthRoute exact path="/">
            <Login />
            </AuthRoute>
          <AuthRoute exact path="/signup">
            <SignUp />
          </AuthRoute>
        </Switch>
      </AuthProvder>
    </div>
  );
}

export default App;
