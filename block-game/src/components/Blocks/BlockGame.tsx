import React from "react";
import { useState } from "react";
import { createBoard } from "../../utilities/gameHelpers";
import { StyledBlocks, StyledBlocksWrapper } from "./StyledBlockGame";

import Board from "../Board/Board";
import Display from "../Display/Display";
import StartButton from "../StartButton/StartButton";

const BlockGame: React.FC = () => {
  const [dropTime, setDroptime] = useState<null | number>(null);
  const [gameOver, setGameOver] = useState(true);

  return (
    <StyledBlocksWrapper>
      <StyledBlocks>
        <Board board={createBoard()} />
        <div className="blockgame__side">
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
        </div>
      </StyledBlocks>
    </StyledBlocksWrapper>
  );
};

export default BlockGame;
