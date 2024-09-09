import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.YELLOW};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0.5rem;
  border: none;
  box-shadow: grey 0.1rem 0.1rem 0.4rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  padding: 0.8rem 1.2rem;

  cursor: pointer;

  text-shadow: 0.1rem 0.1rem 0.4rem grey;
  -webkit-font-smoothing: antialiased;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    scale: 1.02;
  }
  &:active {
    scale: 1;
  }
`;
