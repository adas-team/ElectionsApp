import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./components/pages/HomePage";
import Valid from "./components/pages/ValidateVoterPage";
import Vote from "./components/pages/VotePage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/validate" component={Valid} />
      <Route exact path="/vote" component={Vote} />
    </Switch>
  );
}

export default App;
