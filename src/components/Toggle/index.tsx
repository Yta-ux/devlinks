import { Container } from "./style";

export function Toggle (props: {theme: boolean, toggleTheme: () => void}) {

  return (
    <Container onClick={props.toggleTheme}>
      <button></button>
    </Container>
  )
}