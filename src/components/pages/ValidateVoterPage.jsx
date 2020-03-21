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
import "firebase/firestore";

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

  handleError = error => {
    switch (error) {
      case "notOnMailingList":
        console.log("ERROR: Not on the mailing list");
        break;
      case "duplicateVoter":
        console.log("ERROR: Duplicate voter");
        break;
      default:
        console.log("ERROR");
    }
    return false;
  };

  checkVoterInMailingList = email => {
    // (Step 1) Retrieve mailing list and check email
    const isInMailingsList = true; // change to false when other implementation added
    // firebase
    //   .firestore()
    //   .collection("mailingList")
    //   .get()
    //   .doc(email)
    //   .then(docData => {
    //     if (docData.exists) {
    //       // document exists (online/offline)
    //       this.handleError("notOnMailingList");
    //     } else {
    //       // document does not exist (only on online)
    //     }
    //   })
    //   .catch(fail => {
    //     // Either
    //     // 1. failed to read due to some reason such as permission denied ( online )
    //     // 2. failed because document does not exists on local storage ( offline )
    //   });
    return isInMailingsList;
  };

  addVoter = (email, voter) => {
    // (Step 2) Retrieve email from DB to block duplicate voters
    firebase
      .database()
      .ref()
      .child("voters")
      .orderByChild("email")
      .equalTo(email)
      .once("value", snapshot => {
        const hasVotedBefore = snapshot.numChildren();
        hasVotedBefore
          ? this.handleError("duplicateError")
          : // (Step 3) If unique, add to the voters collection
            firebase
              .database()
              .ref("voters")
              .push(voter);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, adasTeamEvent, agreeToBeHonest } = this.state;
    const ccid = email.match(/[^@]+/)[0];

    if (email && ccid && adasTeamEvent && agreeToBeHonest) {
      // Check voter eligibility and add accordingly
      const voter = { ccid, email, adasTeamEvent };
      const isInMailingList = this.checkVoterInMailingList(email);
      isInMailingList && this.addVoter(email, voter);
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
      !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) ||
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
