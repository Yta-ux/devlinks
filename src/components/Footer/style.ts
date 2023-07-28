import { styled } from "styled-components";

const Container = styled.div`
display: flex;
gap: 0.8rem;
margin: auto;

  a {
    color: ${(props) => props.theme.text};
    line-height: 24px;
    text-decoration: none;
    display: flex;
    flex-direction: column-reverse;
  }

  span {
    width: 100%;
    background-color: ${(props) => props.theme.text};
    height: 2px;
    border-radius: 6px;
  }
`;

export { Container };
