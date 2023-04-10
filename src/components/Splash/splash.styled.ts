import styled, { keyframes } from "styled-components";
import splash from "../../assets/imgs/splash/splash.webp"
import { colors } from "../../styles/variables";
import { LogoStyled } from "../Logo/logo.styled";


const SplashAnimate = keyframes`
  100% {
    opacity: 0;
  }
`
const color = keyframes`
  100% {
    color: ${colors.orange}
  }
`

interface SplashType {
  show: boolean;
  position?: number
}

export const SplashWrapper = styled.div<SplashType>`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(235, 94, 40, 0.75) 100%), url(${splash});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;

  animation: ${SplashAnimate} 0.1s both ease-in;
  animation-delay: 2s;

  & ${LogoStyled} {
    animation: LogoAnimate 1s  ease-in-out both;
    animation-delay: 1s;
    & .icon {
      animation: ${color} 0.8s ease-in both;
      animation-delay: 1s;
    }

    @keyframes LogoAnimate {
      0% {
        transform: translate(0)
      }
      100% {
        opacity: 1;
        transform: translateY(calc((-50vh) + ${props => props.position + 'px'})); //pegando 50% da tela e somando com o valor em px da distancia a ser percorrida 
        .icon {
          color: ${colors.orange};
        }
      }
    }
  }
`