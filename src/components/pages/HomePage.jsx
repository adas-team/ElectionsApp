import { Grid, Label, Segment, Button, Message } from "semantic-ui-react";
import AdaBotFromRight from "../../assets/AdaBotFromRight.png";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "styled-components";
import { isMobile } from "react-device-detect";

const TextContainer = style.div`
  text-align: center; 
  padding: 80px !important;
  margin-top: -90px !important;
  padding-bottom: 50px !important;

  .welcome {
    font-size: 60px;
  }

  .subheader {
    font-size: 36px;
  }

  .info {
    font-size: 20px;
  }
`;

const StyledSegment = style(Segment)`
  float: right;  
  width: 70% !important; 
  margin-bottom: 100px !important;
  margin-right: 60px !important;
`;

const GridContainer = style(Grid)`
  height: 95%;
  width: 100%;
  background-image: url(${AdaBotFromRight});
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: 30%;  
`;

const MobileMessage = style(Message)`
  margin-left: 20px !important;
`;

const covidAcknowledgment = `During this pandemic, we hope you and your loved ones 
are all safe, healthy, and you are taking great care of yourself mentally 
and physically. We are priviledged to be living in a first-world country 
that has the resources and capacity to mitigate the risks of COVID-19. 
With combined effort, time, and patience, things will be back to normal 
relatively soon. With that being said, we thank you for taking the time 
to help us run as smoothly as possible during this sensitive time.`;

const beforeYouBegin = `Before you begin, the University of Alberta 
acknowledges that we are located on Treaty 6 territory, and respects 
the histories, languages, and cultures of First Nations, Metis, Inuit, 
and all First Peoples of Canada, whose presence continues to enrich 
our vibrant community.
`;

const checkOutCandidates = `If you haven't already, please refer to the
Candidates tab to see all who are running before making a decision.`;

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      visible: true,
      mobileMessageVisible: false,
    };
  }

  componentDidMount() {
    if (isMobile) {
      this.setState({ mobileMessageVisible: true });
    }
  }

  handleMessageDismiss = () => {
    this.setState({ mobileMessageVisible: false });
  };

  renderMobileMessage = () => {
    const { mobileMessageVisible } = this.state;
    return mobileMessageVisible ? (
      <MobileMessage
        negative
        attached="top"
        onDismiss={this.handleMessageDismiss}
        header="Are you on a mobile device?"
        content="This voting app was designed to be used on a computer, not your mobile. Please switch to your computer now for the best experience."
      />
    ) : null;
  };

  render() {
    return (
      <GridContainer verticalAlign="middle" columns={1}>
        <Grid.Column>
          {this.renderMobileMessage()}
          <StyledSegment>
            <Label as="a" color="blue" size="massive" ribbon>
              2020
            </Label>
            <TextContainer>
              <h1 className="welcome">Welcome to Ada's Team Elections!</h1>
              <h2 className="subheader">
                We appreciate you all coming out to participate!
              </h2>
              <h3 className="info">{covidAcknowledgment}</h3>
              <h3 className="info">{beforeYouBegin}</h3>
              <h3 className="info">{checkOutCandidates}</h3>
            </TextContainer>
            {/* <Link to="/validate"> */}
            <Button disabled={true} fluid color="blue" size="massive">
              Start
            </Button>
            {/* </Link> */}
          </StyledSegment>
        </Grid.Column>
      </GridContainer>
    );
  }
}

export default HomePage;
