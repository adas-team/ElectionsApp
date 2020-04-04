import React, { Component } from "react";
import style from "styled-components";
import { candidates } from "../constants";
import { Card, Image, Form, Rating } from "semantic-ui-react";

const Header = style.h5`
  padding-top: 10px;
`;

const PreferencesContainer = style.ol`
  margin-top: -1rem;
  padding-left: 1.0rem;
`;

const RadioButton = style(Form.Radio)`
  text-align: center;
`;

// const RatingCentered = style(Rating)`

// `;

const VOTE_METHOD = {
  RADIO: "radio",
  RATE: "rate",
};

class Candidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null,
      voteMethod: VOTE_METHOD.RATE,
    };
  }

  handleSelect = (e, { value }) => {
    const { onSelect, candidateName } = this.props;
    onSelect(candidateName);
  };

  handleRate = (e, { rating }) => {};

  getCandidateDetails = (name) => {
    console.log(candidates[name]);
    const candidateInfo = candidates[name];
    return candidateInfo;
  };

  renderRadioMethod = (candidateName, currSelection) => {
    return (
      <RadioButton
        name="radioGroup"
        onChange={this.handleSelect}
        checked={candidateName === currSelection}
      />
    );
  };

  renderRateMethod = () => {
    return (
      <Rating
        icon="star"
        onRate={this.handleRate}
        size="massive"
        clearable={true}
        defaultRating={0}
        maxRating={3}
      />
    );
  };

  render() {
    const { candidateName, currSelection, reelect } = this.props;
    const name = candidateName.replace(/([A-Z])/g, " $1").trim();
    const candidateInfo = this.getCandidateDetails(
      reelect ? candidateName : name
    );
    const { photoSrc, preferences } = candidateInfo || {};
    const { color, voteMethod } = this.state;

    return (
      <Card centered={true} color={color}>
        <Image fluid={true} src={photoSrc} />
        <Card.Content>
          <Card.Header textAlign={true}>{name}</Card.Header>
          {!reelect ? (
            <Card.Meta>
              <Header>Preferences:</Header>
              <PreferencesContainer>
                {preferences
                  ? preferences.map((position) => <li>{position}</li>)
                  : null}
              </PreferencesContainer>
            </Card.Meta>
          ) : null}
        </Card.Content>
        <Card.Content extra>
          {voteMethod === VOTE_METHOD.RATE
            ? this.renderRateMethod(candidateName, currSelection)
            : this.renderRadioMethod(candidateName, currSelection)}
        </Card.Content>
      </Card>
    );
  }
}

export default Candidate;
