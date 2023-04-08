import styled from "styled-components";
import { colors, font } from "../../styles/variables";

export const ContainerLoginStyled = styled.header`
  width: 100vw;
  min-height: 100vh;
  background-color: ${colors.gray1};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.375rem;

  padding: 1rem;
`
export const FormStyled = styled.form`
  width: 100%;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all .2s ease-in-out;


  & > h1 {
    font-family: ${font.default};
    color: ${colors.gray7};
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 28px;
    letter-spacing: 0.18em;
    font-variant: all-small-caps;
    text-align: center;
  }

  & > .form {
    display: flex;
    flex-direction: column;
    gap: 3px;

    .grid {
      display: grid;
      grid-template-rows: repeat(2, auto);
      grid-template-columns: repeat(6, 1fr);
      column-gap: 1rem;
      row-gap: 3px;

      > div:nth-child(1) {
        grid-column: span 3;
      }
      > div:nth-child(2) {
        grid-column: span 3;
      }
      > div:nth-child(3) {
        grid-column: span 4;
      }
      > div:nth-child(4) {
        grid-column: span 2;
      }
    }
  }
`