import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
   font-family: Cousine;
   src: url("fonts/Cousine-Bold.ttf");
}

@font-face {
   font-family: Cousine;
   src: url("fonts/Cousine-Regular.ttf");
}

* {      
   font-family: Cousine;
   margin: 0px;
}   

html, body{
      font-family: Cousine;
      margin: 0;
      padding: 0;
   }
`;
