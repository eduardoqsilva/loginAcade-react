import styled from "styled-components";
import { colors, font } from "../../styles/variables";

export const ContainerStyled = styled.header`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.gray1};
  color: ${colors.gray5};
  font-family: ${font.default};

  display: flex;
  align-items: center;
  justify-content: center;
`