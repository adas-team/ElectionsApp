import React, { Fragment } from "react";
import style from "styled-components";
import { Item, Divider } from "semantic-ui-react";
import { candidates, REELECT, reelectedCandidates } from "../constants";

const CandidatesHeader = style.h1`
  font-size: 80px !important;
  text-align: center;
`;

const Subheader = style.h2`
  text-align: center;
  padding-bottom: 30px;
`;

const CandidateName = style.h1`
    font-size: 30px; 
`;

const CandidateSpeech = style.h3`
    font-size: 20px;
    font-weight: lighter;
`;

const CandidatePage = () => {
  const showCandidates = REELECT ? reelectedCandidates : candidates;

  return (
    <Fragment>
      <CandidatesHeader>Candidates</CandidatesHeader>
      <Subheader>
        Please take a moment to read their speeches before voting.
      </Subheader>
      <Divider />
      <Item.Group divided stackable="true">
        {showCandidates ? (
          Object.keys(showCandidates).map((currCandidate) => (
            <Item key={currCandidate}>
              <Item.Image
                centered
                size="medium"
                src={showCandidates[currCandidate].photoSrc}
              />
              <Item.Content verticalAlign="top">
                <CandidateName>{candidates[currCandidate].name}</CandidateName>
                <CandidateSpeech>
                  {candidates[currCandidate].speech}
                </CandidateSpeech>
              </Item.Content>
              <Divider />
            </Item>
          ))
        ) : (
          <Subheader>Coming soon!</Subheader>
        )}
      </Item.Group>
    </Fragment>
  );
};

export default CandidatePage;
