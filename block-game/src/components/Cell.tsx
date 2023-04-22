import React from "react";
import { BLOCKS } from "../utilities/gameElements";

type Props = {
  type: keyof typeof BLOCKS;
};

const Cell: React.FC<Props> = ({ type }) => <div>Hello from Cell{type}</div>;

export default React.memo(Cell);
