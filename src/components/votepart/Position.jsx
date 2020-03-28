import React from "react";
import { positionDesc } from "../constants";
import { Popup } from "semantic-ui-react";
import style from "styled-components";

const PopupMessage = style(Popup)`
  font-size: 16px !important;
  max-width: 62.5% !important; 
`;
const Position = ({ name }) => {
  return (
    <PopupMessage wide="very" trigger={<h1>{name}</h1>} position="top left">
      {positionDesc[0][name]}
    </PopupMessage>
  );
};

export default Position;
