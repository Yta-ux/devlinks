import {styled} from "styled-components"

const Container = styled.div`
display: flex;
justify-content: center;
gap: 1.6rem;

a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
img {
  width: 2.2rem;
  filter: ${({theme}) => theme.filter};
}
`

export {Container}