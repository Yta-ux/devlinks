import avatarLight from "../../assets/avatar-light.jpeg";
import avatarDark from "../../assets/avatar.jpeg";
import { Container } from "./style";

export function Profile(props: { username: string; isDarkTheme: boolean }) {
  return (
    <Container>
      <img src={props.isDarkTheme ? avatarDark : avatarLight} />
      <p>{props.username}</p>
    </Container>
  );
}
