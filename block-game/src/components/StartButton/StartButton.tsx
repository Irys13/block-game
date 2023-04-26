import React from "react";
import { StyledStartButton } from "./StyledStartButton";

type Props = {
  callback: () => void;
};

const StartButton: React.FC<Props> = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);
export default StartButton;
