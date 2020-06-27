import React from 'react';
import NavBar from './Components/NavBar';
import {Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";
import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import AuthProvider from './Providers/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
