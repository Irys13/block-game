import styled from "styled-components";

export const StyledBlocksWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  outline: none;
`;

export const StyledBlocks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 40px;
  margin: 0 auto;
  
  .display {
    display: flex;
    justify-content: space-between;
    width: 380px;
  }
`;
