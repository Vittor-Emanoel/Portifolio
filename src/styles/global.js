import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;  
          }
              h1 {
                color:#333333
              }
          body {
          --webkit-font-smoothing: antialiased;

          }
          body, input, textarea, button {
          font-family: 'Rubik', sans-serif;
          font-family: 'Work Sans', sans-serif;
          font-weight: 400;
    

          }

`
