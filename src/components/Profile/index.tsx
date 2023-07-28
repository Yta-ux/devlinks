import { Container } from "./style";

export function Profile(props: { username: string; isDarkTheme: boolean }) {
  return (
    <Container>
      <div></div>
      <p>{props.username}</p>
    </Container>
  );
}
