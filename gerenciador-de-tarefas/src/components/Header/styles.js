import styled from "styled-components";

export const Container = styled.header`
  z-index: 1;
  grid-area: header;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_01};
  border-bottom: 0.1rem solid grey;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  width: 100%;
  max-width: 80rem;
  padding: 2rem 2rem;
`;
