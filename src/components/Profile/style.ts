import {styled} from "styled-components"
import avatarLight from "../../assets/avatar-light.jpeg";
import avatarDark from "../../assets/avatar.jpeg";

const Container = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
div {
  margin-bottom: 0.8rem;
  width: 112px;
  height: 112px;
  border-radius: 100%;
  object-fit: cover;
  border: 2px solid #463e72;
  background: url(${props => props.theme.title === 'light' ? avatarLight : avatarDark}) no-repeat center/cover;
  transition: background 0.2s;

}
p{
  font-size: 1.6rem;
}
`

export {Container}