import React from "react";
import { BOARD_HEIGHT, BOARD_WIDTH } from "./gameElements";

export const createBoard = () =>
  Array.from(Array(BOARD_HEIGHT), () => new Array(BOARD_WIDTH).fill([0, "clear"]));
