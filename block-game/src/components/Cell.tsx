import React from "react";

type Props = {
  type: any; //temporary
};

const Cell: React.FC<Props> = ({ type }) => <div>Hello from Cell{type}</div>;

export default Cell;
