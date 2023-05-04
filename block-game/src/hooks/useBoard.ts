import React, { useEffect, useState } from "react";
import { createBoard } from "../utilities/gameHelpers";

// types
import { PLAYER } from "./usePlayer";
import { BOARD, BOARDCELL } from "../components/Board/Board";

export const useBoard = (player: PLAYER, resetPlayer: () => void) => {
  const [board, setBoard] = useState(createBoard());

  useEffect(() => {
    if (!player.position) return;

    const updateBoard = (previousBoard: BOARD): BOARD => {
      // flush the board
      const newBoard = previousBoard.map(
        (row) =>
          row.map((cell) =>
            cell[1] === "clear" ? [0, "clear"] : cell
          ) as BOARDCELL[]
      );

      // Then draw the block // improve by using for loop
      player.block.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newBoard[y + player.position.y][x + player.position.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });

      return newBoard;
    };

    setBoard((previous) => updateBoard(previous));
  }, [player.collided, player.position?.x, player.position?.y, player.block]);

  return { board, setBoard };
};
