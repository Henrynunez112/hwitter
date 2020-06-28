import React from 'react';
import NavBar from './Components/NavBar';
import {Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";
import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import AuthProvider from './Providers/AuthContext';
import {AuthRoute, ProtectedRoute} from "./Util/routesUtil";

function App() {
  return (
    <div className="App">
      <AuthProvider>

      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <ProtectedRoute exact path="/users">
          <Users />
        </ProtectedRoute>
        <AuthRoute exact path="/signup">
          <SignUp />
        </AuthRoute>
        <AuthRoute exact path="/login">
          <Login />
        </AuthRoute>
        </Switch>
  
      </AuthProvider>
    </div>
  );
}

export default App;
