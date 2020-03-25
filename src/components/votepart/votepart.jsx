import React, { Component } from "react";
import style from "styled-components";
import Position from "./Position";
import Candidate from "./Candidate";
import { getPositions, getCandidateList } from "../helper";
import { Form, Card } from "semantic-ui-react";

const VoteHeader = style.h1`
    font-size: 80px !important;
    text-align: center;
`;

const Subheader = style.h2`
    text-align: center;
`;

class VotePart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: {},
      positions: {},
      candidates: {}
    };
  }

  componentDidMount() {
    this.initVote();
    this.setCandidateList();
  }

  initVote = async () => {
    // Initialize user's vote to have all positions set to empty strings
    // The empty strings will eventually contain the selected candidate's name
    const positions = await getPositions();
    let votes = {};
    positions.forEach(function(currPosition) {
      votes = {
        ...votes,
        [currPosition]: ""
      };
    });
    this.setState({ votes, positions });
  };

  setCandidateList = async () => {
    const candidates = await getCandidateList();
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

  renderPositions = () => {
    const { positions } = this.state;
    if (positions.length) {
      return positions.map(currPosition => [
        <Position key={currPosition} name={currPosition} />,
        <Form.Group>
          <Card.Group onChange={this.handleSelection}>
            {this.renderCandidates(currPosition)}
          </Card.Group>
        </Form.Group>
      ]);
    }
  };

  renderCandidates = position => {
    const { candidates } = this.state;
    if (candidates[position]) {
      const candidate = candidates[position];

      return Object.keys(candidate).map(candidateName => (
        <Candidate key={candidateName} name={candidateName} />
      ));
    }
  };

  render() {
    return (
      <Form>
        <VoteHeader>Vote</VoteHeader>
        <Subheader>
          If you leave this page before submitting, your vote will not be
          counted.
        </Subheader>
        <div>{this.renderPositions()}</div>
      </Form>
    );
  }
}

export default VotePart;
