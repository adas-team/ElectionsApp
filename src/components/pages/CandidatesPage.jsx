import React, { Fragment } from "react";
import style from "styled-components";
import { Item, Divider } from "semantic-ui-react";
import { candidates } from "../constants";

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
  return (
    <Fragment>
      <CandidatesHeader>Candidates</CandidatesHeader>
      <Subheader>
        Please take a moment to read their speeches before voting.
      </Subheader>
      <Divider />
      <Item.Group divided stackable="true">
        {candidates ? (
          Object.keys(candidates).map(currCandidate => (
            <Item>
              <Item.Image
                centered
                rounded="true"
                size="medium"
                src={candidates[currCandidate].photoSrc}
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
