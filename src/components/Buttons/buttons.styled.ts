import styled, { css } from "styled-components";
import { colors, font } from "../../styles/variables";


interface ButtonType {
  variation?: 'primary' | 'secundary'
  radius?: number
}
export const ButtonStyled = styled.button<ButtonType>`
  width: 100%;
  height: 53px;
  border-radius: ${props => props.radius + 'px'};
  background-color: ${colors.orange};
  border: none;
  transition: all 0.1s ease-in;

  font-family: ${font.default};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: ${colors.white};

  ${props => props.variation === 'secundary'
    ? css`
      background-color: transparent;
      border: 2px solid ${colors.orange};
      color: ${colors.orange};
    ` 
    : ''}

  :active {
    transform: scale(0.95);
  }
`