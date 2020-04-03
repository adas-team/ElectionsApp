import React from "react";
import { positionDesc } from "../constants";
import { Popup } from "semantic-ui-react";
import style from "styled-components";

const PopupMessage = style(Popup)`
  font-size: 16px !important;
  max-width: 62.5% !important; 
`;

const PositionName = style.h1`
  width: fit-content;
`;

const Position = ({ name }) => {
  return (
    <PopupMessage
      wide="very"
      trigger={<PositionName>{name}</PositionName>}
      position="top left"
    >
      {positionDesc[0][name]}
    </PopupMessage>
  );
};

export default Position;
