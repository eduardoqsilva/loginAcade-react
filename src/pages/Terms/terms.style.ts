import styled from "styled-components";
import { colors, font } from "../../styles/variables";

export const ContainerStyled = styled.header`
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 2rem;
`
export const WrapperStyled = styled.main`
  width: 100%;
  max-width: 600px;
  margin: auto;
  
  font-family: ${font.default};
  text-align: justify;

  & a {
    color: ${colors.gray4};
    &:active {
      color: ${colors.orange}
    }
  }

  & h1 {
    color: ${colors.gray3};
    margin: 2rem 0;
  }
  & p {
    font-weight: 500;
    color: ${colors.gray4};
    margin-top: 1rem;
    text-indent: 3ch;
  }
`