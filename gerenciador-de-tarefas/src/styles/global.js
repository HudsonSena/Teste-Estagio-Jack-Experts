import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_01};
        font-family: "Montserrat", sans-serif;
        -webkit-font-smoothing: antialiased;
        max-width: 80rem;
        margin: auto;
    }

    h1 {
        color: white;
        font-size: 2rem;
        text-shadow: 0.2rem 0.2rem 0.2rem grey;
    }
    h2 {
        color: white;
        font-size: 1.8rem;
        text-shadow: 0.2rem 0.2rem 0.2rem grey;
    }
    h3 {
        color: white;
        font-size: 1.6rem;
        text-shadow: 0.2rem 0.2rem 0.2rem grey;
    }

    a {
        text-decoration: none;
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
    }
`;
