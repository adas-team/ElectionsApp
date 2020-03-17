import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Main from "./pages/mainpage/mainpage";
import Valid from "./pages/validpage/validpage";
import Vote from "./pages/votepage/votepage";


function App() {
  return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/validate" component={Valid} />
        <Route exact path="/vote" component={Vote} />
      </Switch>
  )
}

export default App;
