import { Container } from "./style";

export function Toggle (props: {theme: boolean, toggleTheme: () => void}) {

  return (
    <Container>
      <button onClick={props.toggleTheme}></button>
    </Container>
  )
}