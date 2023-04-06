import styled, { keyframes } from "styled-components";
import { colors, font } from "../../styles/variables";

const drop = keyframes`
  0% {
    opacity: 0;
    transform: scale(2);
  }
  35% {
    transform: scale(1);
  }
  65% {
    transform: scale(1.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`
interface ContainerStyledType {
  show: boolean
}

export const ContainerStyled = styled.div<ContainerStyledType>`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  background-color: rgba(0,0,0,0.8);
  padding: 1rem;

  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;

  & h2 {
    font-family: ${font.default};
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: ${colors.gray6}
  }

  & .indicator {
    max-width: 300px;
    max-height: 300px;
    width: 100%;
    height: 100%;
    
    background-color: ${colors.gray3};
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  & .img {
    width: 100px;
    height: 100px;
    animation: ${drop} 0.6s 1 ease-in-out;
  }
`