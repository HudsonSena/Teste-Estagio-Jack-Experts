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
        padding: .5rem;
        font-family: "Montserrat", sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    h1 {
        font-size: 2.4rem;
    }
    h2 {
        font-size: 1.8rem;
    }
    h3 {
        font-size: 1.6rem;
    }
    p {
        font-size: 1.2rem;
    }

    a {
        text-decoration: none;
    }
`;