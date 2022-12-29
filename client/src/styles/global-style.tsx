import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border: none;
        outline: none;
    }

    html,
    body {
        max-width: 100vw;
        max-height: 100vh;
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.gray[900]};
        color: ${theme.colors.gray[400]};        
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
