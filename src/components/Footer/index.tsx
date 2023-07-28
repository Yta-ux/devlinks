import { Container } from "./style";

export function Footer(props: { author: { name: string; url: string } }) {
  return (
    <Container>
      Feito com ❤️ por{" "}
      <a href={props.author.url} target="_blank">
        <span></span>
        {props.author.name}
      </a>
    </Container>
  );
}
