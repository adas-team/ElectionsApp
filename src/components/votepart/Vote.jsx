import React, { Component, Fragment } from "react";
import style from "styled-components";
import Position from "./Position";
import ListCandidates from "./ListCandidates";
import { getPositions, getCandidateList } from "../helper";
import { Button } from "semantic-ui-react";
import firebase from "firebase/app";
import "firebase/firestore";

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

class Vote extends Component {
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
    // Initialize user’s vote to have all positions set to empty strings
    // The empty strings will eventually contain the selected candidate’s name
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
        <ListCandidates
          key={"candidatesFor" + currPosition}
          updateVote={this.updateVote}
          position={currPosition}
        />
      ]);
    }
  };

  validVote = () => {
    const { votes } = this.state;
    let valid = Object.keys(votes).every(function(position) {
      const currVote = votes[position];
      return currVote.length > 1;
    });

    return valid;
  };

  handleSubmit = () => {
    const { voter } = this.props;

    if (!voter) {
      console.log("ERROR: Voter did not validate");
      return 1;
    }

    const email = voter["email"];
    firebase
      .database()
      .ref()
      .child("voters")
      .orderByChild("email")
      .equalTo(email)
      .once("value", snapshot => {
        const validatedVoter = snapshot.numChildren();
        if (validatedVoter) {
          // If voter is within the voters database, update voter with their votes
          const { votes } = this.state;
          const voterWithVotes = { ...voter, votes };
          const voterKey = Object.keys(snapshot.val())[0];
          firebase
            .database()
            .ref("voters/" + voterKey)
            .set(voterWithVotes);
        }
      });
  };

  render() {
    const validVote = this.validVote();
    return (
      <Fragment>
        <VoteHeader>Vote</VoteHeader>
        <Subheader>
          If you leave this page before submitting, your vote will not be
          counted.
        </Subheader>
        <Container>{this.renderPositions()}</Container>
        <SubmitButton
          fluid
          disabled={!validVote}
          size="massive"
          color="blue"
          onClick={this.handleSubmit}
        >
          Submit
        </SubmitButton>
      </Fragment>
    );
  }
}

export default Vote;