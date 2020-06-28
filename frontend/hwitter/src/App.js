import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Users from './Components/Users';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import AuthProvder from './Providers/AuthContext';
import { AuthRoute, ProtectedRoute } from './Util/routesUtil';

function App() {
  return (
    <div className="App">
    <AuthProvder>

     <NavBar />
     <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <ProtectedRoute path="/users" >
          <Users />
        </ProtectedRoute>
        <AuthRoute path="/signup" >
          <SignUp />
        </AuthRoute>
        <AuthRoute path="/login" >
          <Login />
        </AuthRoute>
     </Switch>
    </AuthProvder>
    </div>
  );
};

export default App;