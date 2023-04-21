import React from "react";

import Cell from "./Cell";

type Props = {
  stage: any; //temporary
};

const Board: React.FC<Props> = ({ stage }) => <div>Hello from Board <Cell type={undefined} /></div>;

export default Board;
