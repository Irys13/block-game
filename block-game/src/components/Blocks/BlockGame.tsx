import React, { useRef } from "react";
import { useState } from "react";
import { createBoard } from "../../utilities/gameHelpers";

// Custom Hooks
import { useInterval } from "../../hooks/useInterval"
import { usePlayer } from "../../hooks/usePlayer";
import { useBoard } from "../../hooks/useBoard";

//Components
import Board from "../Board/Board";
import Display from "../Display/Display";
import StartButton from "../StartButton/StartButton";

// Styles
import { StyledBlocks, StyledBlocksWrapper } from "./StyledBlockGame";

const BlockGame: React.FC = () => {
  const [dropTime, setDroptime] = useState<null | number>(null);
  const [gameOver, setGameOver] = useState(true);

  const gameArea = useRef<HTMLDivElement>(null);

  const { player, updatePlayerPosition, resetPlayer } = usePlayer();
  const { board, setBoard } = useBoard(player, resetPlayer);

  const movePlayer = (direction: number) => {
    updatePlayerPosition({ x: direction, y: 0, collided: false});
  };

  const keyUp = ({ keyCode }: {keyCode: number}): void => {
    // change the droptime speed when  user releases down arrow
    if (keyCode === 40) {
      setDroptime(1000);
    }
  }

  const handleStartGame = (): void => {
    // Need to focus the window with the key events
    if(gameArea.current) gameArea.current.focus();

    // reset everything
    setBoard(createBoard());
    setDroptime(1000);
    resetPlayer();
    setGameOver(false);
  }

  const move = ({ keyCode, repeat}: {keyCode: number, repeat: boolean}): void => {
    if(keyCode === 37) {
      movePlayer(-1);
    } else if(keyCode === 39)  {
      movePlayer(1);
    } else  if(keyCode === 40) {
      //just call once
      if (repeat) return;
      setDroptime(30);
    } else if(keyCode === 38) {
      // Implement this later
    }
  };

  const drop = (): void => {
    updatePlayerPosition({x: 0, y: 1, collided: false});
  }

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledBlocksWrapper role='button' tabIndex={0} onKeyDown={move} onKeyUp={keyUp} ref={gameArea}>
      <StyledBlocks>
        <Board board={board} />
        <div className="blockgame__side">
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text="game over" />
              <StartButton callback={handleStartGame} />
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
