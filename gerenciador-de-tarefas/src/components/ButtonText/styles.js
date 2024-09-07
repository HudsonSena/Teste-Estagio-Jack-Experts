import styled from "styled-components";

export const Container = styled.a`
  width: fit-content;
  background: none;
  border: none;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.6rem;

  cursor: pointer;

  text-shadow: 0.2rem 0.2rem 0.3rem grey;
  -webkit-font-smoothing: antialiased;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    scale: 1.02;
  }
`;
