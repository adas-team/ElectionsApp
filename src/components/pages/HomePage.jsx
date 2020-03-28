import { Grid, Label, Segment, Button } from "semantic-ui-react";
import AdaBotFromRight from "../../assets/AdaBotFromRight.png";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "styled-components";

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
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 30%; 
  overflow: hidden !important;
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
      visible: true
    };
  }

  render() {
    return (
      <GridContainer verticalAlign="middle" columns={1}>
        <Grid.Column>
          <StyledSegment>
            <Label as="a" color="blue" size="massive" ribbon>
              2020
            </Label>
            <TextContainer>
              <h1 class="welcome">Welcome to Ada's Team Elections!</h1>
              <h2 class="subheader">
                We appreciate you all coming out to participate!
              </h2>
              <h3 class="info">{covidAcknowledgment}</h3>
              <h3 class="info">{beforeYouBegin}</h3>
              <h3 class="info">{checkOutCandidates}</h3>
            </TextContainer>
            <Link to="/validate">
              <Button fluid color="blue" size="massive">
                Start
              </Button>
            </Link>
          </StyledSegment>
        </Grid.Column>
      </GridContainer>
    );
  }
}

export default HomePage;
