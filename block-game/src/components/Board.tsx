import React from "react";
import Cell from "./Cell";
import { BLOCKS } from "../utilities/gameElements";

export type BOARDCELL = [keyof typeof BLOCKS, string];
export type BOARD = BOARDCELL[][];

type Props = {
  board: BOARD; //temporary
};

const Board: React.FC<Props> = ({ board }) => <div> {board.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))} </div>;

export default Board;
