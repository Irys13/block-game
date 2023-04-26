import React from 'react';
import { StyledCell } from './StyledCell'; 
import { BLOCKS } from '../../utilities/gameElements';

type Props = {
  type: keyof typeof BLOCKS;
};

const Cell: React.FC<Props> = ({ type }) => <StyledCell type={type} color={BLOCKS[type].color} >Cell</StyledCell>;

export default React.memo(Cell);
