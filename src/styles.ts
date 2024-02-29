import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  rosaClaro: '#FFEBD9',
  branco: '#fff',
  brancoFundo: '#fff8f2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    color: ${cores.rosa};
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
  }
`
