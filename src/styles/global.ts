import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
:root {
  font-size: 62.5%;
}
body {
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
}
`;
