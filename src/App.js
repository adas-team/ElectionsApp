import React, { Fragment } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/pages/HomePage";
import Valid from "./components/ValidateVoter/ValidateVoterPage";
import VotePart from "./components/VotePart/Vote";
import Results from "./components/pages/Results";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/validate" component={Valid} />
        <Route exact path="/vote" component={VotePart} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </Fragment>
  );
}

export default App;
