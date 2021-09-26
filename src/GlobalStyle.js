import { createGlobalStyle } from 'styled-components'
import Roboto from './font/Roboto-Regular.ttf'

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format('truetype');
    font-style: normal;
    font-display: auto;
  }

  body {
    font-family: 'Roboto';
    text-rendering: optimizeLegibility;
    margin: 0;
    padding: 0;
    max-width: 100%;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    background-color: #F5F5F5;
  }
  
  .container {
    max-width: 1184px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`

export default GlobalStyle