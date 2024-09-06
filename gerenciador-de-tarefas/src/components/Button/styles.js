import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.YELLOW};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: .5rem;
    border: none;
    box-shadow: grey .1rem .1rem .1rem .1rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    padding: .2rem;

    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    };

    &:hover {
        scale: 1.02;
    }
`;