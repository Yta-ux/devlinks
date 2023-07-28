import { styled } from "styled-components";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";

const Container = styled.div`
  margin: auto;
  button {
    width: 3.2rem;
    height: 3.2rem;
    background: #ffff
      url(${(props) => (props.theme.toggle === "moon" ? sun : moon)}) no-repeat
      center;
    border: none;
    border-radius: 50%;
    transform: translateX(
      ${(props) => (props.theme.toggle === "moon" ? "110%" : "-10%")}
    );
    transition: all 0.5s;
  }

  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.surface};
  height: 2.4rem;
  width: 6.4rem;
  border-radius: 99px;
  border: 1px solid ${({ theme }) => theme.stroke};
`;

export { Container };
