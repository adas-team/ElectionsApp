import React, { Component } from "react";
import style from "styled-components";
import Position from "./Position";
import VoteDone from "./VoteDone";
import ListCandidates from "./ListCandidates";
import { getPositions, getCandidateList } from "../helper";
import { REELECT, reelectedPositions } from "../constants";
import {
  Grid,
  Button,
  Progress,
  Divider,
  Loader,
  Dimmer
} from "semantic-ui-react";
import firebase from "firebase/app";
import "firebase/firestore";

const VOTE_METHOD = {
  RADIO: "radio",
  RATE: "rate"
};

const VoteHeader = style.h1`
  font-size: 80px !important;
  text-align: center;
`;

const Subheader = style.h2`
  text-align: center;
  margin-top: 0.5rem !important;
`;

const ProgressBar = style(Progress)`
  margin-top: 1.8rem !important;
`;

const DividerPadded = style(Divider)`
  margin-top: 3rem !important;
`;

const SubmitButton = style(Button)`
  align-self: center;
  margin-top: 3rem !important;
`;

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: {},
      positions: {},
      candidates: {},
      redirect: false,
      loading: true,
      reelect: REELECT,
      voteMethod: VOTE_METHOD.RATE
    };
  }

  componentDidMount() {
    this.initVote();
    this.setCandidateList();
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  initVote = async () => {
    // Initialize user’s vote to have all positions set to empty strings
    // The empty strings will eventually contain the selected candidate’s name
    const { reelect } = this.state;
    const positions = reelect ? reelectedPositions : await getPositions();
    let votes = {};
    positions.forEach(function (currPosition) {
      reelect
        ? (votes = {
            ...votes,
            [currPosition]: {
              1: null,
              2: null,
              3: null
            }
          })
        : (votes = {
            ...votes,
            [currPosition]: ""
          });
    });
    this.setState({ votes, positions });
  };

  setCandidateList = async () => {
    const candidates = await getCandidateList();
    this.setState({ candidates });
  };

  updateVote = (card) => {
    const { position, candidateName, candidateRanking } = card;
    const { votes, reelect } = this.state;
    const currVote = reelect
      ? {
          [position]: {
            ...votes[position],
            [candidateRanking]: candidateName
          }
        }
      : {
          [position]: candidateName
        };
    this.setState({
      votes: {
        ...votes,
        ...currVote
      }
    });
  };

  renderPositions = () => {
    const { positions, reelect, voteMethod } = this.state;
    const positionHasCandidates = reelect
      ? reelectedPositions.length
      : positions.length;

    if (positionHasCandidates) {
      const allPositions = reelect ? reelectedPositions : positions;
      return allPositions.map((currPosition, i) => [
        <Position key={currPosition} name={currPosition} />,
        <ListCandidates
          key={"candidatesFor" + currPosition}
          updateVote={this.updateVote}
          position={currPosition}
          reelect={reelect}
          voteMethod={voteMethod}
        />,
        <DividerPadded key={"positionForCandidate" + i} />
      ]);
    }
  };

  validVote = () => {
    const { votes } = this.state;
    let valid = Object.keys(votes).every(function (position) {
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

    this.addVote();
    this.updateVoteCount();
    this.setState({ redirect: true });
  };

  addVote = () => {
    const { voter } = this.props;
    const email = voter["email"];

    firebase
      .database()
      .ref()
      .child("voters")
      .orderByChild("email")
      .equalTo(email)
      .once("value", (snapshot) => {
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

  updateVoteCount = async () => {
    const { votes, reelect } = this.state;
    const increment = firebase.firestore.FieldValue.increment(1);

    await Object.keys(votes).forEach((position) => {
      let vountCount = {};
      const candidateName = votes[position];
      const collectionName = reelect ? "reelectionList" : "candidateList";
      vountCount[`${candidateName}.numOfVotes`] = increment;
      firebase
        .firestore()
        .collection(collectionName)
        .doc(position)
        .update(vountCount);
    });
  };

  renderLoader = () => {
    return (
      <Dimmer page active inverted>
        <Loader size="massive">Loading</Loader>
      </Dimmer>
    );
  };

  render() {
    const validVote = this.validVote();
    const { redirect, loading, votes } = this.state;
    if (redirect) {
      return <VoteDone />;
    }

    console.log(votes);

    return (
      <Grid centered>
        <Grid.Column width={10}>
          <VoteHeader>Vote</VoteHeader>
          <Subheader>
            Hover over the position name to get its description.
          </Subheader>
          <Subheader>
            If you leave this page before submitting, your vote will not be
            counted.
          </Subheader>
          <ProgressBar color="blue" percent={75}></ProgressBar>
          <Divider />
          {loading
            ? this.renderLoader()
            : [
                this.renderPositions(),
                <SubmitButton
                  fluid
                  key="submit"
                  size="massive"
                  disabled={!validVote}
                  color="blue"
                  onClick={this.handleSubmit}
                >
                  Submit
                </SubmitButton>
              ]}
        </Grid.Column>
      </Grid>
    );
  }
}

export default Vote;
