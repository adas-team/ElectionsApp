import { Image, Grid, Label, Segment, Button } from "semantic-ui-react";
import AdaBotHandsUpImage from "../../assets/AdaBotHandsUp.png";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "styled-components";

const ImageStyled = style(Image)`
  position: fixed !important;
  bottom: 0px;
  z-index: -1;
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
`;

// TODO: Fill with appropriate info (e.g. Aboriginal Treaty land, etc)
const infoText = `Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley of
type and scrambled it to make a type specimen book. It has
survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was
popularised in the 1960s with the release of Letraset sheets
containing Lorem Ipsum passages, and more recently with desktop
publishing software like Aldus PageMaker including versions of
Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not
simply random text. Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley of
type and scrambled it to make a type specimen book. It has
survived not only five centuries, but also the leap into
electronic typesetting.`;

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <Segment attached>
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
            <InfoText>{infoText}</InfoText>
            <Link to="/validate">
              <Button fluid attached="bottom" color="blue" size="massive">
                Start
              </Button>
            </Link>
            <ImageStyled attached src={AdaBotHandsUpImage} />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default HomePage;
