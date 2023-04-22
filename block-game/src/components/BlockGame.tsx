import React from "react";
import { useState } from "react";
import { createBoard } from "../utilities/gameHelpers";

import Board from "./Board";
import Display from "./Display";
import StartButton from "./StartButton";

const BlockGame: React.FC = () => {
  const [dropTime, setDroptime] = useState<null | number>(null);
  const [gameOver, setGameOver] = useState(true);

  return (
    <>
      {gameOver ? (
        <>
          <Display gameOver={gameOver} text="game over" />
          <StartButton callback={() => null} />
        </>
      ) : (
        <>
          <Display text={`Score: `} />
          <Display text={`Rows: `} />
          <Display text={`Level: `} />
        </>
      )}

      <Board board={createBoard()} />
    </>
  );
};

export default BlockGame;
