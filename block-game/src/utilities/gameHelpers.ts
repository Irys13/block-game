import React from "react";
import { BLOCKS, BOARD_HEIGHT, BOARD_WIDTH } from "./gameElements";

export const createBoard = () =>
  Array.from(Array(BOARD_HEIGHT), () =>
    new Array(BOARD_WIDTH).fill([0, "clear"])
  );

export const randomBlock = () => {
  const blocks = ["I", "J", "L", "O", "S", "T", "Z"] as (keyof typeof BLOCKS)[];
  const rngBlock = blocks[Math.floor(Math.random() * blocks.length)];
  return BLOCKS[rngBlock];
};
