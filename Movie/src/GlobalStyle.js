import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --maxWidth: 1280px;
    --pdContent: 0 40px;
    --bgDark:#242323;
    --white:#f4e7e7;
    --hoverColor:#dacb46; 
    
  }
* {
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
}
body{
    margin: 0;
  padding: 0;
 
  h1{
      font-size: 2rem;
    color:#fff;
  }
 
  p{
      font-size: 1.1rem;
      color: #fff;
      margin:0;
  }
}
`;
