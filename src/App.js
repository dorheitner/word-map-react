import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./components/Routes";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Routes} name='Routes' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
