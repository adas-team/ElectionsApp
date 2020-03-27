import React, { Component } from "react";
import style from "styled-components";
import Vote from "../VotePart/Vote";
import Results from "../pages/Results";
import AdaBotHeadImage from "../../assets/AdaBotHead.png";
import {
  Grid,
  Progress,
  Image,
  Message,
  Icon,
  Button
} from "semantic-ui-react";

const GridContainer = style(Grid)`
  height: 75%;
  align-items: center;
`;

const VALID_PASS_CONFIG = {
  iconName: "check",
  path: "/vote",
  messageBgColor: "green",
  messageHeader: "Good news!",
  messageContent: "You're eligible to vote.",
  buttonContent: "Start Voting"
};

const VALID_FAIL_CONFIG = {
  iconName: "x",
  path: "/results",
  messageBgColor: "red",
  messageHeader: "Uh oh - you're not eligible!",
  messageContent:
    "It's either because you're not on the mailing list or you haven't attended an Ada's Team event. If you're interested, you can stay tune to check out the results. Otherwise, thanks for coming!",
  buttonContent: "Go to Results"
};

class LoadEligibility extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      redirect: false,
      iconName: "circle notched",
      messageBgColor: null,
      messageHeader: "One moment please",
      messageContent: "We are checking your eligibility to vote.",
      buttonName: null
    };
  }

  componentDidMount() {
    const { loading } = this.state;
    const { eligible } = this.props;
    if (loading) {
      setTimeout(() => {
        let newState;
        if (eligible) {
          newState = { ...VALID_PASS_CONFIG };
        } else {
          newState = { ...VALID_FAIL_CONFIG };
        }

        this.setState({
          loading: false,
          ...newState
        });
      }, 3000);
    }
  }

  handleButtonClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    const {
      messageBgColor,
      messageHeader,
      messageContent,
      buttonContent,
      redirect,
      iconName,
      loading
    } = this.state;

    const { eligible, voter } = this.props;
    if (redirect) {
      return eligible ? <Vote voter={voter} /> : <Results />;
    }

    return (
      <GridContainer verticalAlign="middle" centered columns={1}>
        <Grid.Column width={6}>
          <Image size="huge" src={AdaBotHeadImage} alt="Ada Bot Head" />
          <Progress color="blue" percent={30}></Progress>
          <Message size="massive" color={messageBgColor} icon>
            <Icon name={iconName} loading={loading} />
            <Message.Content>
              <Message.Header>{messageHeader}</Message.Header>
              {messageContent}
            </Message.Content>
          </Message>
          {!loading && (
            <Button
              onClick={this.handleButtonClick}
              fluid
              color="blue"
              size="massive"
            >
              {buttonContent}
            </Button>
          )}
        </Grid.Column>
      </GridContainer>
    );
  }
}

export default LoadEligibility;
