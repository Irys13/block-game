import React from 'react';

type Props = {
    gameOver?: boolean;
    text: string;
}

const Display: React.FC<Props> = ({ gameOver, text }) => <div>Hello from Display {gameOver} {text}</div>;

export default Display;
