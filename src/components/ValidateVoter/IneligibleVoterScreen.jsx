import React, { Component } from "react";
import Main from "../pages/HomePage";

class Vote extends Component {
  constructor() {
    super();
    this.state = {
      startVote: false,
      quesNum: 1
    };
  }

  startVote = () => {
    this.setState({ startVote: true });
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>
            Oooooops, seems your account didn't pass the validation. You can
            valid again!
          </h1>
          {this.state.startVote ? (
            <Main />
          ) : (
            <button onClick={this.startVote}>Back to main page!</button>
          )}
        </div>
      </div>
    );
  }
}

export default Vote;
