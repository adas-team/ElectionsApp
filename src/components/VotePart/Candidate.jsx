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

const ImageResized = style(Image)`
  height: 300px;
`;

class Candidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null,
      rate: {}
    };
  }

  handleSelect = (e, { value }) => {
    const { onSelect, candidateName } = this.props;
    onSelect(candidateName);
  };

  handleRate = (e, { rating }) => {
    const { onSelect, candidateName } = this.props;
    const currRate = {
      [candidateName]: rating
    };
    this.setState({
      rate: currRate
    });
    onSelect(currRate);
  };

  getCandidateDetails = (name) => {
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
        maxRating={3}
        size="massive"
      />
    );
  };

  render() {
    const { candidateName, currSelection, reelect, voteMethod } = this.props;
    const candidateInfo = this.getCandidateDetails(
      reelect ? candidateName : candidateName
    );
    const { photoSrc, preferences } = candidateInfo || {};
    const { color } = this.state;
    console.log(this.props);

    return (
      <Card color={color}>
        <ImageResized src={photoSrc} />
        <Card.Content>
          <Card.Header textAlign="center">{candidateName}</Card.Header>
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
        <Card.Content extra textAlign="center">
          {voteMethod === "rate"
            ? this.renderRateMethod(candidateName, currSelection)
            : this.renderRadioMethod(candidateName, currSelection)}
        </Card.Content>
      </Card>
    );
  }
}

export default Candidate;
