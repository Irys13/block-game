import React, { useEffect, useState } from "react";
import { createBoard } from "../utilities/gameHelpers";

// types
import { PLAYER } from "./usePlayer";
import { BOARD, BOARDCELL } from "../components/Board/Board";

export const useBoard = (player: PLAYER, resetPlayer: () => void) => {
  const [board, setBoard] = useState(createBoard());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    if (!player.position) return;

    setRowsCleared(0);

    const sweepRows = (newBoard: BOARD): BOARD => {
      return newBoard.reduce((accumulator, row) => {
        // If we don't find a 0 it means that the row is full and should be clear
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          setRowsCleared((previous) => previous + 1);
          // Create and empty row at the beginning of the array to push the blocks down instead of returning cleared row
          accumulator.unshift(
            new Array(newBoard[0].length).fill([0, "clear"]) as BOARDCELL[]
          );
          return accumulator;
        }

        accumulator.push(row);
        return accumulator;
      }, [] as BOARD);
    };

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

      if (player.collided) {
        resetPlayer();
        return sweepRows(newBoard);
      }
      return newBoard;
    };

    setBoard((previous) => updateBoard(previous));
  }, [player.collided, player.position?.x, player.position?.y, player.block]);

  return { board, setBoard, rowsCleared };
};
