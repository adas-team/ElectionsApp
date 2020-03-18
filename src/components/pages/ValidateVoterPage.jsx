import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { adasTeamEventOptions } from "../constants";
import AdaBotStandingImage from "../../assets/AdaBotStanding.png";
import {
  Grid,
  Form,
  Image,
  Header,
  Progress,
  Icon,
  Button
} from "semantic-ui-react";
import firebase from "firebase/app";

const ImageContainer = styled(Image)`
  width: 600px;
  height: 600px;
  align-self: center;
`;

const GridContainer = styled(Grid)`
  height: 100%;
`;

class ValidateVoterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      adasTeamEvent: [],
      agreeToBeHonest: false
    };
  }

  handleEmailChange = (e, { value }) => this.setState({ email: value });

  handleDropdownChange = (e, { value }) =>
    this.setState({ adasTeamEvent: value });

  handleCheckboxChange = (e, { checked }) =>
    this.setState({ agreeToBeHonest: checked });

  handleSubmit = e => {
    e.preventDefault();
    const { email, adasTeamEvent, agreeToBeHonest } = this.state;
    const ccid = email.match(/[^@]+/)[0];
    if (email && ccid && adasTeamEvent && agreeToBeHonest) {
      /* TODO: Check to see if: 
      (1) on Ada's Team mailing list; 
      (2) already voted
      */

      // Firebase: Add to the voters collection
      firebase
        .database()
        .ref("voters")
        .push({
          ccid,
          email,
          adasTeamEvent
        });
    }
  };

  renderHeaderText = () => {
    return (
      <Header size="huge">
        <Header.Content>Enter your info to vote!</Header.Content>
        <Header.Subheader>
          In order to cast a valid vote in the Ada's Team executive election,
          you need to be subscribed to the mailing's list and have attended an
          Ada's Team event or activity. Please enter your information below and
          we'll determine your eligibility to vote.
        </Header.Subheader>
      </Header>
    );
  };

  renderEligibleVoterForm = () => {
    const { email, adasTeamEvent, agreeToBeHonest } = this.state;
    const isInvalid =
      !/@ualberta.ca\s*$/.test(email) ||
      adasTeamEvent.length === 0 ||
      !agreeToBeHonest;

    return (
      <Form size="big">
        <Form.Input
          label="Email"
          type="text"
          onChange={this.handleEmailChange}
          placeholder="ccid@ualberta.ca"
        />
        <Form.Dropdown
          multiple
          selection
          label="Please select the Ada's Team event(s) that you attended"
          options={adasTeamEventOptions}
          placeholder="Please select options from the dropdown"
          onChange={this.handleDropdownChange}
        />
        <Form.Checkbox
          size="huge"
          onChange={this.handleCheckboxChange}
          label="I solemnly swear I am being truthful in my answers and understand that I will be put in bad standing (banned) if proven otherwise."
        />
        <Button.Group size="large">
          <Link to="/">
            <Button animated>
              <Button.Content visible>Back</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow left" />
              </Button.Content>
            </Button>
          </Link>
          <Button.Or />
          <Button
            animated
            disabled={isInvalid}
            color="blue"
            type="submit"
            onClick={this.handleSubmit}
          >
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Button.Group>
      </Form>
    );
  };

  render() {
    return (
      <GridContainer verticalAlign="middle" centered>
        <ImageContainer src={AdaBotStandingImage} />
        <Grid.Column width={6}>
          <Progress color="blue" percent={25}></Progress>
          {this.renderHeaderText()}
          {this.renderEligibleVoterForm()}
        </Grid.Column>
      </GridContainer>
    );
  }
}

export default ValidateVoterPage;
