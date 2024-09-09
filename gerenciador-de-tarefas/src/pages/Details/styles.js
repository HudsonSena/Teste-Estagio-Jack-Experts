import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.1rem solid grey;
    padding-bottom: 1.6rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  nav {
    display: flex;
    gap: 1rem;
  }
`;
