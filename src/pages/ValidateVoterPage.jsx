import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdaBotStandingImage from "../assets/AdaBotStanding.png";
import { Grid, Form, Image, Header, Progress, Button } from "semantic-ui-react";
import styled from "styled-components";

const dummyDropdownOptions = [
  // TODO: Should retrieve dropdown options from database.
  // For now, hardcoded.
  {
    key: "Tutoring",
    text: "Tutoring",
    value: "Tutoring"
  },
  {
    key: "Coffee && Code",
    text: "Coffee && Code",
    value: "Coffee && Code"
  }
];

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
      adasTeamEvent: "",
      agreeToBeHonest: false
    };
  }

  handleEmailChange = (e, { value }) => this.setState({ email: value });
  handleDropdownChange = (e, { value }) =>
    this.setState({ adasTeamEvent: value });
  handleCheckboxChange = (e, { checked }) =>
    this.setState({ agreeToBeHonest: checked });

  handleSubmit = () => {
    /* Check to see if: 
    (1) on Ada's Team mailing list; 
    (2) already voted
    */

    const { email, adasTeamEvent, agreeToBeHonest } = this.state;
    // if (email && adasTeamEvent && agreeToBeHonest) {

    // }
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
      adasTeamEvent === "" ||
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
          selection
          label="Please select one Ada's Team activity/event that you attended"
          options={dummyDropdownOptions}
          placeholder="Please select an option from the dropdown"
          onChange={this.handleDropdownChange}
        />
        <Form.Checkbox
          size="huge"
          onChange={this.handleCheckboxChange}
          label="I solemnly swear I am being truthful in my answers and understand that I will be put in bad standing (banned) if proven otherwise."
        />
        <Button.Group size="large">
          <Link to="/">
            <Button>Back</Button>
          </Link>
          <Button.Or />
          <Button
            disabled={isInvalid}
            color="blue"
            type="submit"
            onClick={this.handleSubmit}
          >
            Next
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
