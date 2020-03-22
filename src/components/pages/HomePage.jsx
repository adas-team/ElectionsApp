import { Image, Grid, Label, Segment, Button } from "semantic-ui-react";
import AdaBotHandsUpImage from "../../assets/AdaBotHandsUp.png";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "styled-components";

const ImageStyled = style.div`
  z-index: -1;
  min-width: 834.656px;
  max-height: 547px;
  position: fixed !important;
  overflow: hidden !important; 
`;

const WelcomeMessage = style.h1`
  font-size: 80px !important;
  text-align: center;
`;

const Subheader = style.h2`
  text-align: center;
`;

const InfoText = style.h3`
  text-align: center;
  font-size: 19px;
`;

const SegmentStyled = style(Segment)`
  margin-top: 40px !important;
  padding-top: 20px !important;
  margin-bottom: -50px !important;
  min-width: 836.656px;  
`;

const covidAcknowledgment = `During this pandemic, we hope you and your loved ones 
are all safe, healthy, and you are taking great care of yourself mentally 
and physically. We are priviledged to be living in a first-world country 
that has the resources and capacity to mitigrate the risk of COVID-19. 
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
      visible: true
    };
  }

  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <SegmentStyled attached>
            <Label as="a" color="blue" size="massive" ribbon>
              2020
            </Label>
            <WelcomeMessage>
              Welcome to <br />
              Ada's Team Elections!
            </WelcomeMessage>
            <Subheader>
              We appreciate you all coming out to participate!
            </Subheader>
            <InfoText>{covidAcknowledgment}</InfoText>
            <InfoText>{beforeYouBegin}</InfoText>
            <InfoText>{checkOutCandidates}</InfoText>
            <Link to="/validate">
              <Button
                onClick={this.handleButtonClick}
                fluid
                attached="bottom"
                color="blue"
                size="massive"
              >
                Start
              </Button>
            </Link>
          </SegmentStyled>
          <ImageStyled>
            <Image attached src={AdaBotHandsUpImage} />
          </ImageStyled>
        </Grid.Column>
      </Grid>
    );
  }
}

export default HomePage;
