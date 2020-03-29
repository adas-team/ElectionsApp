import _ from "lodash";
import { resultCards } from "../constants";
import style from "styled-components";
import { getPositions, getCandidateList } from "../helper";
import React, { Component, Fragment } from "react";
import { Card, Divider, Image, Placeholder } from "semantic-ui-react";
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

class Results extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      candidateList: {}
    };
  }

  async componentDidMount() {
    // Initialize results array with positions as keys
    const positions = await getPositions();
    const candidateList = await getCandidateList();
    this.setState({ results: positions, candidateList });
  }

  getWinners = () => {
    const { candidateList } = this.state;
    const winners = Object.keys(candidateList).map(currPosition => {
      const currCandidates = candidateList[currPosition];
      const winnerForPosition = this.getWinnerForPosition(currCandidates);
      this.addWinner(currPosition, winnerForPosition);
      return { [currPosition]: winnerForPosition };
    });
    return winners;
  };

  addWinner = async (position, winner) => {
    firebase
      .firestore()
      .collection("winners2020")
      .doc(position)
      .set({ winner });
  };

  getWinnerForPosition = candidates => {
    let max = 0;
    let winner = [];
    Object.values(candidates).forEach(currCandidate => {
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

  renderPlaceholders = loading => {
    return (
      <Card.Group itemsPerRow={5} stackable>
        {_.map(resultCards, card => (
          <Card key={card.header}>
            {loading ? (
              <PlaceholderContainer>
                <Placeholder.Image square />
              </PlaceholderContainer>
            ) : (
              <Image src={card.avatar} />
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
                  <Card.Header>{card.header}</Card.Header>
                  <Card.Meta>{card.date}</Card.Meta>
                  <Card.Description>{card.description}</Card.Description>
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
    const winners = this.getWinners();
    return (
      <Fragment>
        <ResultsHeader>Results</ResultsHeader>
        <Subheader>
          We're still counting. Come back soon to see the new executive team for
          2020-21!
        </Subheader>
        <Divider />
        {this.renderPlaceholders(loading, winners)}
      </Fragment>
    );
  }
}

export default Results;
