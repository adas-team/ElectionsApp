import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdaBotStandingImage from "../../assets/AdaBotStanding.png";
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
    this.state = { email: undefined, adasTeamEvent: undefined };
  }

  // TODO: Handle user clicks
  handleValidation = () => {};
  handleSubmit = () => {};
  handleDropdownChange = () => {};

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
    return (
      <Form size="big">
        <Form.Input
          label="Email"
          control="input"
          placeholder="ccid@ualberta.ca"
        />
        <Form.Dropdown
          fluid
          selection
          label="Please select one Ada's Team activity/event that you attended"
          name="Ada's Team Event"
          options={dummyDropdownOptions}
          placeholder="Please select an option from the dropdown"
          onChange={this.handleDropdownChange}
        />
        <Form.Checkbox
          size="huge"
          label="I solemnly swear I am being truthful in my answers and understand that I will be put in bad standing (banned) if proven otherwise."
        />
        <Button.Group size="large">
          <Link to="/">
            <Button>Back</Button>
          </Link>
          <Button.Or />
          <Button
            disabled
            color="blue"
            type="submit"
            onClick={this.handleSubmit}
          >
            Submit
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
