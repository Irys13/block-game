import React from 'react';
import styled from 'styled-components';
import { BLOCKS } from '../../utilities/gameElements';

type Props = {
    type: keyof typeof BLOCKS;
    color: string;
}

export const StyledCell = styled.div<Props>`
    width: auto;
    background: rgba(${props => props.color}, 0.8);
    border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
`