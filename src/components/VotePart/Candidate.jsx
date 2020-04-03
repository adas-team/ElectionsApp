import React, { Component } from "react";
import style from "styled-components";
import { candidates } from "../constants";
import { Card, Image, Form } from "semantic-ui-react";

const Header = style.h5`
  padding-top: 10px;
`;

const PreferencesContainer = style.ol`
  margin-top: -1rem;
  padding-left: 1.5rem;
`;

const RadioButton = style(Form.Radio)`
  text-align: center;
`;

class Candidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null
    };
  }

  handleSelect = (e, { value }) => {
    const { onSelect, candidateName } = this.props;
    onSelect(candidateName);
  };

  getCandidateDetails = name => {
    const candidateInfo = candidates[name];
    console.log(candidateInfo);
    return candidateInfo;
  };

  render() {
    const { candidateName, currSelection } = this.props;
    const name = candidateName.replace(/([A-Z])/g, " $1").trim();
    const candidateInfo = this.getCandidateDetails(name);
    const { photoSrc, preferences } = candidateInfo || {};

    const { color } = this.state;

    return (
      <Card color={color}>
        <Card.Content>
          {/* <Image floated="right" size="small" src={photoSrc} /> */}
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <Header>Preferences:</Header>
            <PreferencesContainer>
              {preferences
                ? preferences.map(position => <li>{position}</li>)
                : null}
            </PreferencesContainer>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <RadioButton
            name="radioGroup"
            onChange={this.handleSelect}
            checked={candidateName === currSelection}
          />
        </Card.Content>
      </Card>
    );
  }
}

export default Candidate;
