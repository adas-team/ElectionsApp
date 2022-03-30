import React, { Component, Fragment } from "react";
import style from "styled-components";
import { getPositions, getCandidateList, getWinners } from "../helper";
import { Card, Divider, Image, Placeholder } from "semantic-ui-react";
import firebase from "firebase/app";
import "firebase/firestore";
import { yearRange } from "../constants";

const ResultsHeader = style.h1`
  font-size: 80px !important;
  text-align: center;
`;

const Subheader = style.h2`
  text-align: center;
  padding-bottom: 30px;
`;

const PlaceholderContainer = style(Placeholder)`
  max-width: 500px !important;
  height: 400px !important;
`;

const resultsPending =
  `We're still counting. Come back soon to see the new executive team for ${yearRange}!`;

const resultsComputed =
  `Thank you all for coming out! This is our new executive team for ${yearRange}.`;

// Manual computation of winners
const MANUAL = true;

class Results extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      candidateList: {},
      winners: {}
    };
  }

  async componentDidMount() {
    // Initialize results array with positions as keys
    const positions = await getPositions();
    const candidateList = await getCandidateList();
    const winners = MANUAL
      ? await this.getWinners()
      : await this.computeWinners();
    this.setState({ results: positions, candidateList, winners });
  }

  computeWinners = async () => {
    const { candidateList } = this.state;
    Object.keys(candidateList).map((currPosition) => {
      const currCandidates = candidateList[currPosition];
      const winnerForPosition = this.getWinnerForPosition(currCandidates);
      this.addWinner(currPosition, winnerForPosition);
      return { [currPosition]: winnerForPosition };
    });
    const winners = await this.getWinners();
    return winners;
  };

  addWinner = async (position, winner) => {
    await firebase
      .firestore()
      .collection("winners")
      .doc(position)
      .set({ winner });
  };

  getWinners = async () => {
    if (MANUAL) {
      return await getWinners();
    }

    const snapshot = await firebase.firestore().collection("winners").get();

    let winners = {};
    snapshot.forEach(function (doc) {
      const position = doc.id;
      const candidatesForPosition = doc.data();
      // for testing: console.log(position, " => ", candidatesForPosition);
      winners = { ...winners, [position]: candidatesForPosition };
    });

    return winners;
  };

  getWinnerForPosition = (candidates) => {
    let max = 0;
    let winner = [];
    Object.values(candidates).forEach((currCandidate) => {
      if (currCandidate["numOfVotes"] > max) {
        max = currCandidate["numOfVotes"];
        winner = [currCandidate];
      } else if (currCandidate["numOfVotes"] === max) {
        const tiedWith = [currCandidate];
        winner = [...winner, ...tiedWith];
      }
    });

    return winner;
  };

  getWinner = (position, winners) => {
    if (winners[position].length > 2) {
      return "Placeholder Winner";
    }
    return Object.keys(winners[position]);
  };

  getWinnerPhoto = (position, winners) => {
    if (Object.keys(winners).length > 0) {
      const winnerName = Object.keys(winners[position]);
      const photoSrc = winners[position][winnerName]["photoSrc"];

      return <Image src={photoSrc} />;
    }

  };

  renderPlaceholders = () => {
    const { loading, winners } = this.state;
    
    return (
      <Card.Group itemsPerRow={5} stackable>
        {Object.keys(winners)
          .reverse()
          .map((position) => (
            <Card key={position}>
              {loading ? (
                <PlaceholderContainer>
                  <Placeholder.Image square />
                </PlaceholderContainer>
              ) : (
                this.getWinnerPhoto(position, winners)
              )}

              <Card.Content>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length="very short" />
                      <Placeholder.Line length="medium" />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length="short" />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <Fragment>
                    <Card.Header>{position}</Card.Header>
                    <Card.Meta>{this.getWinner(position, winners)}</Card.Meta>
                  </Fragment>
                )}
              </Card.Content>
            </Card>
          ))}
      </Card.Group>
    );
  };

  render() {
    const { loading } = this.state;
    console.log('STATE:', this.state);
    return (
      <Fragment>
        <ResultsHeader>Results</ResultsHeader>
        <Subheader>{ !(loading) ? resultsPending : resultsComputed}</Subheader>
        <Divider />
        { Object.keys(this.state.winners) > 0 && this.renderPlaceholders() }
      </Fragment>
    );
  }
}

export default Results;
