import React from 'react';

type Props = {
    callback: () => void;
}

const StartButton: React.FC<Props> = ({ callback }) => (
<div onClick={callback}>Start Game</div>
)
export default StartButton;
