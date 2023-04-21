import React from 'react';

type Props = {
    callback: any; //temporary
}

const StartButton: React.FC<Props> = ({ callback }) => <div>Hello from start button {callback}</div>

export default StartButton;
