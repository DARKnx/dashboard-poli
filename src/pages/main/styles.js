import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    justify-content: center;
    align-items: center;
    height: 100vh;
    display: flex;
    width: 100%;

& > img{
  width: 25%;
  animation: float 4s ease-in-out infinite;
}


@keyframes float {
  0%, 100% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
}
`