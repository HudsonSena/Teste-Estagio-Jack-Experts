import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 1rem;
  box-shadow: grey 0rem 0rem 0.5rem;
  border-radius: 0.5rem;

  gap: 1rem;

  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GREY_02};
  }

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  div:nth-child(2) {
    border-top: 0.1rem solid grey;
    padding-top: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
  }
`;
