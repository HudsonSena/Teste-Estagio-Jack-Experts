import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 8rem auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.main`
  grid-area: content;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1.6rem;
  margin-top: 8rem;

  button {
    max-width: fit-content;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
