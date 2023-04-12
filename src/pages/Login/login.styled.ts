import styled, { keyframes } from "styled-components";

import background from "../../assets/imgs/login/background.webp"
import { colors, font } from "../../styles/variables";

const drop = keyframes`
  0%{
    opacity: 0;
    transform: scale(0.95);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
`


export const BackgroundStyled = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)), url(${background});
  background-size: cover;
  background-position: 70% top;
  background-repeat: no-repeat;
  filter: grayscale(100%) brightness(1.1);
`

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  
  padding: 2rem;
`
export const WrapperLoginStyled = styled.header`
  width: 100%;
  height: 100%;
  max-width: 400px;
  margin: auto;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 4fr auto;
  align-items: center;
  justify-items: center;
  padding: 1rem 0;

  & h6 {
    font-family: ${font.default};
    color: ${colors.gray6};
    font-weight: 600;
     a{
        color: ${colors.orange_light};
        text-decoration: none;
        font-weight: bold;

        &:hover {
          color: ${colors.orange};
        }
     }
  }
`

export const FormStyled = styled.form`
  width: 100%;
  animation: ${drop} .2s ease-in both;
  animation-delay: 1.8s;

  & h2 {
    color: ${colors.gray7};
    font-family: ${font.default};
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0.18em;
    text-align: center;
    margin-bottom: 2rem;
  }

  & .buttons {
    width: 300px;
    margin: auto;
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1.56rem;

    @media (max-width: 370px) {
      width: 250px;
    }
  }
`