import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 1rem "Inter", sans-serif;
    background: #1a1d23;
    color: #f8f8f8;
    min-height: 100vh;
    padding: 0.5rem;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;
