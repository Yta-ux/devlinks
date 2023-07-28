import { styled } from "styled-components";

const Container = styled.a`
  background: transparent;
  border: 1px solid ${(props) => props.theme.stroke};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.6rem;
  border-radius: 8px;
  transition: all 0.2s;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  font-weight: 500;
  text-transform: capitalize;
  
  &:hover {
    background-color: ${(props) => props.theme.surfaceHover};
    border: 1px solid ${(props) => props.theme.strokeHover};
    cursor: pointer;
  }
`;

export { Container };
