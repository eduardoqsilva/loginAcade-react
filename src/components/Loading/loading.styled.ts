import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/variables";
import { LogoStyled } from "../Logo/logo.styled";

const Loading = keyframes`
  0%{
    transform: translateY(30px);
  }
  100%{
    transform: translateY(-30px);
  }
`
interface loadType {
  load: boolean
}

export const LoadingWrapperStyled = styled.div<loadType>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  width: 100vw;
  height: 100vh;
  background-color: ${colors.gray1};

  display: ${props => props.load ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;

  & ${LogoStyled} {
    animation: ${Loading} .8s infinite alternate ease-in-out;
  }
`