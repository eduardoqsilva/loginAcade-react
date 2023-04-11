import styled from "styled-components";
import { colors } from "../../styles/variables";

interface LogoTypes {
  color: '1' | '2';
  width: number;
}

export const LogoStyled = styled.div<LogoTypes>`
  width: ${props => props.width}px;
  height: ${props => props.width}px;

  & .icon {
    height: 100%;
    width: 100%;
    color: ${props => props.color === '1' 
      ? `${colors.orange}`
      : `${colors.white}`
    };
  }

  @media (max-height: 670px) {
    width: ${props => props.width - 20}px;
    height: ${props => props.width - 20}px;
  }
  @media (max-width: 370px) {
    width: ${props => props.width - 20}px;
    height: ${props => props.width - 20}px;
  }
`