import React from 'react';
import NavBar from './Components/NavBar';
import {Switch, Route} from "react-router-dom";
import Home from "./Components/Home"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
