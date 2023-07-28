import { Container } from "./style";


export function Link (props: {url: string, message: string}) {

  return (
    <Container href={props.url} target="_blank">
    <p>{props.message}</p>
    </Container>
  )
}