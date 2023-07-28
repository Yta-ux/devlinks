import { Link } from "../Link"
import { Container } from "./style"

export function ListLinks (props: {links: {message: string, url: string}[]}) {

  return (
    <Container>
    {props.links.map((link) => {
      return <Link message={link.message} url={link.url} key={link.url} /> 
    })}
    </Container>
  )
}