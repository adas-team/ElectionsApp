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

const ImageResized = style.div`
  max-width: 510px;
  max-height: 510px;
  min-width: 302px;
  min-height: 301px;
`;

// const RatingCentered = style(Rating)`

// `;

class Candidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null,
      rate: {},
      voteMethod: null,
    };
  }

  componentDidMount() {
    const { candidateName } = this.props;
    this.setState({
      rate: {
        [candidateName]: null,
      },
    });
  }

  handleSelect = (e, { value }) => {
    const { onSelect, candidateName } = this.props;
    onSelect(candidateName);
  };

  handleRate = (e, { rating }) => {
    const { onSelect, candidateName } = this.props;
    const currRate = {
      [candidateName]: rating,
    };
    this.setState({
      rate: currRate,
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
        size="massive"
        // defaultRating={0}
        maxRating={3}
      />
    );
  };

  render() {
    const { candidateName, currSelection, reelect, voteMethod } = this.props;
    const name = candidateName.replace(/([A-Z])/g, " $1").trim();
    const candidateInfo = this.getCandidateDetails(
      reelect ? candidateName : name
    );
    const { photoSrc, preferences } = candidateInfo || {};
    const { color } = this.state;

    return (
      <Card centered={true} color={color}>
        <ImageResized>
          <Image size="massive" src={photoSrc} />
        </ImageResized>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
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
          {voteMethod === "rate"
            ? this.renderRateMethod(candidateName, currSelection)
            : this.renderRadioMethod(candidateName, currSelection)}
        </Card.Content>
      </Card>
    );
  }
}

export default Candidate;
