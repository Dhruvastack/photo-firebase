import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";


import { Login } from "./components/Login";

function App() {
  return (

      <Router>
      
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
           <Route path ='/main' component={Dashboard}/>
          </Switch>
        </div>
      </Router>

  );
}

export default App;
