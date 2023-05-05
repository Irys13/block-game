import React, { useCallback, useState } from "react";
import { BOARD_WIDTH } from "../utilities/gameElements";
import { randomBlock } from "../utilities/gameHelpers";

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
  return { player, updatePlayerPosition, resetPlayer };
};
