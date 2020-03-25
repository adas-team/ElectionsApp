import React, { Component } from "react";
import { getCandidateList } from "../candidateHelper";
// import { Link } from "react-router-dom";
// import { Button, Card, Image } from "semantic-ui-react";

class VotePart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: {},
      candidates: {}
    };
  }

  componentDidMount() {
    this.initVote();
    this.setCandidateList();
  }

  initVote = () => {
    // Initialize user's vote to have all positions set to empty strings
    // The empty strings will eventually contain the selected candidate's name
    const positions = this.getPositions();
    let votes = {};
    positions.forEach(function(currPosition) {
      votes = {
        ...votes,
        [currPosition]: ""
      };
    });
  };

  getPositions = () => {
    const candidates = getCandidateList();
    return Object.keys(candidates);
  };

  setCandidateList = () => {
    const candidates = getCandidateList();
    this.setState({ candidates });
  };

  handleSelection = card => {
    const { position, candidateName } = card;
    const { votes } = this.state;
    this.setState({
      votes: {
        ...votes,
        [position]: [candidateName]
      }
    });
  };

  render() {
    return <div>VotePart</div>;
  }
}

export default VotePart;
