import React, { Component, Fragment } from "react";
import style from "styled-components";
import { getPositions, getCandidateList } from "../helper";
import { Card, Divider, Image, Placeholder } from "semantic-ui-react";
import PlaceholderImg from "../../assets/Daniel.jpg";
import firebase from "firebase/app";
import "firebase/firestore";

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
  "We're still counting. Come back soon to see the new executive team for 2020-21!";

const resultsComputed =
  "Thank you all for coming out! This is our new executive team for 2020-21.";

class Results extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      candidateList: {},
      winners: {},
    };
  }

  async componentDidMount() {
    // Initialize results array with positions as keys
    const positions = await getPositions();
    const candidateList = await getCandidateList();
    const winners = await this.computeWinners();
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
      .collection("winners2020")
      .doc(position)
      .set({ winner });
  };

  getWinners = async () => {
    const snapshot = await firebase.firestore().collection("winners2020").get();

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
    return winners[position]["winner"][0]["email"];
  };

  renderPlaceholders = () => {
    const { loading, winners } = this.state;
    return (
      <Card.Group itemsPerRow={4} stackable>
        {Object.keys(winners)
          .reverse()
          .map((position) => (
            <Card>
              {loading ? (
                <PlaceholderContainer>
                  <Placeholder.Image square />
                </PlaceholderContainer>
              ) : (
                <Image src={PlaceholderImg} />
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
    return (
      <Fragment>
        <ResultsHeader>Results</ResultsHeader>
        <Subheader>{loading ? resultsPending : resultsComputed}</Subheader>
        <Divider />
        {this.renderPlaceholders()}
      </Fragment>
    );
  }
}

export default Results;
