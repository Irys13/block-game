import React, { useCallback, useState } from "react";
import { BOARD_WIDTH } from "../utilities/gameElements";
import { isColliding, randomBlock } from "../utilities/gameHelpers";
import { BOARD } from "../components/Board/Board";

export type PLAYER = {
  position: {
    x: number;
    y: number;
  };
  block: any[][]; // TODO: find better way of assigning type to this one. (string | number) doesn't seem to work.
  collided: boolean;
};

export const usePlayer = () => {
  const [player, setPlayer] = useState({} as PLAYER);

  const rotate = (matrix: PLAYER['block']) => {
    // Turn columns into rows (transpose)
    const rotateBlock = matrix.map((_, i) => matrix.map(column => column[i]));
    //reverse each row to get a rotated matrix
    return rotateBlock.map(row => row.reverse());
  }

  const playerRotate = (board: BOARD): void => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.block = rotate(clonedPlayer.block);

    //this is so the player can't rotate into the walls or other blocks
    const positionX = clonedPlayer.position.x;
    let offset = 1;

    while (isColliding(clonedPlayer, board, { x: 0, y: 0})) {
      clonedPlayer.position.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));

      if (offset > clonedPlayer.block[0].length) {
        clonedPlayer.position.x = positionX;
        return;
      }
    }

    setPlayer(clonedPlayer);
  }

  const updatePlayerPosition = ({
    x,
    y,
    collided,
  }: {
    x: number;
    y: number;
    collided: boolean;
  }): void => {
    setPlayer((previous) => ({
      ...previous,
      position: {
        x: previous.position.x + x,
        y: previous.position.y + y,
      },
      collided,
    }));
  };

  const resetPlayer = useCallback(
    (): void =>
      setPlayer({
        position: { x: BOARD_WIDTH / 2 - 2, y: 0 },
        block: randomBlock().shape,
        collided: false,
      }),
    []
  );
  return { player, updatePlayerPosition, resetPlayer, playerRotate };
};
