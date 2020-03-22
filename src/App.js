import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./components/pages/HomePage";
import Valid from "./components/pages/ValidateVoterPage";
import ValidPass from "./components/pages/EligibleVoterScreen";
import ValidFail from "./components/pages/IneligibleVoterScreen";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/validate" component={Valid} />
      <Route exact path="/validpass" component={ValidPass} />
      <Route exact path="/validfail" component={ValidFail} />
    </Switch>
  );
}

export default App;
