import React, { useEffect, useState } from "react";
import { ROWPOINTS } from "../utilities/gameElements";

export const useGameStatus = (rowsCleared: number) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    if (rowsCleared > 0) {
      setScore((previous) => previous + ROWPOINTS[rowsCleared - 1] * level);
      setRows((previous) => previous + rowsCleared);
    }
  }, [rowsCleared]);

  return { score, setScore, rows, setRows, level, setLevel };
};
