import React from "react";
import Cell from "../Cell/Cell";
import { BLOCKS } from "../../utilities/gameElements";
import { StyledBoard } from "./StyledBoard";

export type BOARDCELL = [keyof typeof BLOCKS, string];
export type BOARD = BOARDCELL[][];

type Props = {
  board: BOARD; //temporary
};

const Board: React.FC<Props> = ({ board }) => <StyledBoard> {board.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))} </StyledBoard>;

export default Board;
