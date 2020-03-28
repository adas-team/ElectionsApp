import React, { Fragment } from "react";
import style from "styled-components";

const Description = style.h3`
  margin-top: -0.5rem;
`;

const Position = ({ name }) => {
  return (
    <Fragment>
      <h1>{name}</h1>
      <Description>Position description goes here.</Description>
    </Fragment>
  );
};

export default Position;
