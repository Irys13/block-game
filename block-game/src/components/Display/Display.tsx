import React from 'react';
import { StyledDisplay } from './StyledDisplay';

type Props = {
    gameOver?: boolean;
    text: string;
}

const Display: React.FC<Props> = ({ gameOver, text }) => <StyledDisplay>Hello from Display {gameOver} {text}</StyledDisplay>;

export default Display;
