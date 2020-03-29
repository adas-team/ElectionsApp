import React from "react";
import { Grid, Progress } from "semantic-ui-react";
import style from "styled-components";
import AdaBotSleepImage from "../../assets/AdaBotSleep.png";

const VoteDoneHeader = style.h1`
    padding-top: 1.8rem;
  font-size: 80px !important;
  text-align: center;
`;

const Subheader = style.h2`
    text-align: center;
    margin-top: 0.5rem !important;
    margin-bottom: 2rem !important;
`;

const ImageBackground = style.div`
    height: 90%; 
    background-size: 35%; 
    background-repeat: no-repeat;
    background-image: url(${AdaBotSleepImage});
    background-position: center bottom;
`;

const VoteDone = ({ name }) => {
  return (
    <ImageBackground>
      <Grid centered columns={1}>
        <Grid.Column width={10}>
          <VoteDoneHeader>You're Done!</VoteDoneHeader>
          <Subheader>
            Thanks for voting. We'll let you know when the results are in.
          </Subheader>
          <Progress active color="blue" percent={100}></Progress>
        </Grid.Column>
      </Grid>
    </ImageBackground>
  );
};

export default VoteDone;
