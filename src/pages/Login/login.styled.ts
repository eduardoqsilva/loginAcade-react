import styled from "styled-components";

import background from "../../assets/imgs/login/background.jpg"
import { colors, font } from "../../styles/variables";

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
  
  padding: 1rem;
`
export const WrapperLoginStyled = styled.header`
  width: 100%;
  height: 100%;
  max-width: 400px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6rem;
`

export const FormStyled = styled.form`
  width: 100%;

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
  }
`