import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: center;
  align-content: center;
  justify-items: center;
  margin: auto;
  width: 80%;

  padding-top: 5.6rem;


  & > .gradient1{
    width: 550px;
    height: 640px;
    border-radius: 50%;
    filter: blur(200px);
    right: 0;
    top: -160px;
    background: radial-gradient(circle, rgba(54,57,96,0.804359243697479) 14%, rgba(70,62,114,1) 16%, rgba(241,184,237,0.678) 25%);
    position: absolute;
    z-index: -1;
  }

  & > .gradient2{
    width: 550px;
    height: 640px;
    border-radius: 50%;
    filter: blur(250px);
    left: 0;
    bottom: -160px;
    background: radial-gradient(circle, rgba(241,184,237,1) 3%, rgba(70,62,114,1) 23%, rgba(54,57,96,0.804359243697479) 73%);
    position: absolute;
    z-index: -1;
  }

  @media (min-width: 980px){
    width: 40%;
  }
`;

export { Container };
