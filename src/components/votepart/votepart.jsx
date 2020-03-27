import React, { Component, Fragment } from "react";
import style from "styled-components";
import Position from "./Position";
import ListCandidates from "./ListCandidates";
import { getPositions, getCandidateList } from "../helper";
import { Button } from "semantic-ui-react";

const VoteHeader = style.h1`
    font-size: 80px !important;
    text-align: center;
`;

const Subheader = style.h2`
    text-align: center;
`;

const Container = style.div`
  padding-left: 2rem;
`;

const SubmitButton = style(Button)`
  align-self: center;
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

  updateVote = card => {
    const { position, candidateName } = card;
    const { votes } = this.state;
    this.setState({
      votes: {
        ...votes,
        [position]: candidateName
      }
    });
  };

  renderPositions = () => {
    const { positions } = this.state;
    if (positions.length) {
      return positions.map(currPosition => [
        <Position key={currPosition} name={currPosition} />,
        <ListCandidates updateVote={this.updateVote} position={currPosition} />
      ]);
    }
  };

  render() {
    return (
      <Fragment>
        <VoteHeader>Vote</VoteHeader>
        <Subheader>
          If you leave this page before submitting, your vote will not be
          counted.
        </Subheader>
        <Container>{this.renderPositions()}</Container>
        <SubmitButton fluid size="massive" color="blue">
          Submit
        </SubmitButton>
      </Fragment>
    );
  }
}

export default VotePart;
