import React from "react";

import Board from "./Board";
import Display from "./Display";
import StartButton from "./StartButton";

type Props = {
  text: string; //temporary
};

const BlockGame: React.FC<Props> = ({ text }) => (
  <>
    <Board stage={undefined} />
    <aside>
      <div>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
      </div>
      <StartButton callback={undefined} />
    </aside>
  </>
);

export default BlockGame;
