import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.6rem;

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

  label {
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 1.6rem;

    text-shadow: 0.2rem 0.2rem 0.3rem grey;
    -webkit-font-smoothing: antialiased;
  }
`;
