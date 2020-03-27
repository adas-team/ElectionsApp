import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoadEligibility from "./LoadEligibility";
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
  height: 90%;
`;

const errors = {
  NOT_ON_MAILING_LIST: "The voter is not on the mailing list."
};

const onError = error => {
  const { NOT_ON_MAILING_LIST } = errors;
  switch (error) {
    case NOT_ON_MAILING_LIST:
      console.log("ERROR:", NOT_ON_MAILING_LIST);
      break;
    default:
      console.log("ERROR");
  }
};

class ValidateVoterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      adasTeamEvent: [],
      agreeToBeHonest: false,
      redirect: false,
      eligible: undefined,
      ineligibleSubmitted: false,
      redirectAfterSubmitTo: "",
      voter: undefined
    };
  }

  handleEmailChange = (e, { value }) => this.setState({ email: value });

  handleDropdownChange = (e, { value }) =>
    this.setState({ adasTeamEvent: value });

  handleCheckboxChange = (e, { checked }) =>
    this.setState({ agreeToBeHonest: checked });

  validateAndAddVoter = voter => {
    // (Step 1) Retrieve mailing list from cloud firestore and check email
    const { email } = voter;
    const mailingListRef = firebase
      .firestore()
      .collection("filteredMailingList")
      .doc(email);

    mailingListRef
      .get()
      .then(docData => {
        if (docData.exists) {
          // document exists (online/offline)
          this.addVoter(voter);
        } else {
          // document does not exist (only on online)
          onError(errors.NOT_ON_MAILING_LIST);
          this.setState({ eligible: false, redirect: true });
        }
      })
      .catch(fail => {
        console.log("ERROR: Promise failed");
        // Either
        // 1. failed to read due to some reason such as permission denied ( online )
        // 2. failed because document does not exists on local storage ( offline )
      });
  };

  addVoter = voter => {
    // (Step 2) Retrieve email from realtime DB to allow revotes (replace old vote)
    const { email } = voter;
    const votersRef = firebase.database().ref("voters");
    firebase
      .database()
      .ref()
      .child("voters")
      .orderByChild("email")
      .equalTo(email)
      .once("value", snapshot => {
        const hasVotedBefore = snapshot.numChildren();
        if (hasVotedBefore) {
          // If want to revote, allow them to proceed by replacing their entry
          const voterKey = Object.keys(snapshot.val())[0];
          firebase
            .database()
            .ref("voters/" + voterKey)
            .set(voter);
        } else {
          votersRef.push(voter);
        }
      });
    this.setState({ eligible: true, redirect: true, voter });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, adasTeamEvent, agreeToBeHonest } = this.state;
    const ccid = email.match(/[^@]+/)[0];

    if (email && ccid && adasTeamEvent && agreeToBeHonest) {
      // Check voter eligibility and add accordingly
      const voter = { ccid, email, adasTeamEvent };
      this.validateAndAddVoter(voter);
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
    const { redirect, eligible, voter } = this.state;
    if (redirect) {
      return <LoadEligibility voter={voter} eligible={eligible} />;
    }
    return (
      <GridContainer verticalAlign="middle" centered>
        <ImageContainer src={AdaBotStandingImage} />
        <Grid.Column width={6}>
          <Progress color="blue" percent={15}></Progress>
          {this.renderHeaderText()}
          {this.renderEligibleVoterForm()}
        </Grid.Column>
      </GridContainer>
    );
  }
}

export default ValidateVoterPage;
