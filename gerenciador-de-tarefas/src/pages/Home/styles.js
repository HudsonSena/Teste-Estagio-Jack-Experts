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

export const Content = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  padding: 2rem;

  nav {
    max-width: max-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
