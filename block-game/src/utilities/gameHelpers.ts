import React from "react";
import { PLAYER } from "../hooks/usePlayer";
import { BOARD } from "../components/Board/Board";
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

export const isColliding = (
  player: PLAYER,
  board: BOARD,
  { x: moveX, y: moveY }: { x: number; y: number }
) => {
  //using for loops to be able to return (and break). Not possible with forEach
  for (let y = 0; y < player.block.length; y += 1) {
    for (let x = 0; x < player.block[y].length; x += 1) {
      // Check that we're on an actual block cell
      if (player.block[y][x] !== 0) {
        if (
          // Check that our move is inside the game areas height (y)
          // That we are not moving through the bottom of the board
          !board[y + player.position.y + moveY] ||
          // Check that our move is inside game areas width (x)
          !board[y + player.position.y + moveY][x + player.position.x + moveX] ||
          // Check that the cell we're moving to isn't set to clear
          board[y + player.position.y + moveY][x + player.position.x + moveX][1] !== "clear"
        ) {
          return true;
        }
      }
    }
  }

  //  If everything above is false
  return false;
};
