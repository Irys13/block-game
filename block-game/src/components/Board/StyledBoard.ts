import styled from 'styled-components';
import { BOARD_HEIGHT, BOARD_WIDTH } from '../../utilities/gameElements';

export const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(${BOARD_WIDTH}, 30px);
  grid-template-rows: repeat(${BOARD_HEIGHT}, 30px);
  grid-gap: 1px;
  border: 1px solid #777;
  background: #222;
`;