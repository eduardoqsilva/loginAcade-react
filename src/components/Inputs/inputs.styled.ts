import styled, { css, keyframes } from "styled-components";
import { colors, font } from "../../styles/variables";


const shake = keyframes`
  0% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(5px);
  }
`

interface InputType {
  warning: boolean
  variation: '01' | '02'
}
interface WarningType {
  warning: boolean
}

export const InputWrapperStyled = styled.div<InputType>`
  
  width: 100%;
  height: 53px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  
  background-color: ${props => props.variation === '01' ? `${colors.gray2}` : 'transparent'};
  color: ${colors.gray4};
  padding: 0 1rem;
  border-radius: ${props => props.variation === '01' ? '5px' : '0px'};
  transition: all .1s ease-in;
  margin-top: 18px;

  font-family: ${font.default};
  
  position: relative;

  ${(props) => props.warning 
    ? css`${props.variation === '01' 
        ? `border: 2px solid ${colors.red_dark};`
        : `border-bottom: 2px solid ${colors.red_dark};`};
          color: ${colors.red};
          animation: ${shake} 0.1s 4 ease-in;`
    : `${props.variation === '01' ? 
          `border: 2px solid transparent` :
          `border: 2px solid transparent;
           border-bottom: 2px solid #2F3030;`
        }`
  }

  &:focus-within {
    ${props => props.variation === '01' 
      ? `border: 2px solid ${colors.orange_light};`
      : `border-bottom: 2px solid ${colors.orange_light};`
    }
    color: ${colors.white};
  }

  & label {
    position: absolute;
    top: ${props => props.variation === '01' ? '-18px' : '0'};
    left: ${props => props.variation === '01' ? '0' : '3.4rem'};
    
    font-style: normal;
    font-weight: 400;
    font-size: 0.625rem;
    line-height: 12px;
    letter-spacing: 0.18em;
    color: ${colors.gray7}
  }

  & input {
    height: 100%;
    width: 100%;

    background-color: ${props => props.variation === '01' ? `${colors.gray2}` : 'transparent'};
    border: none;
    outline: none;
    caret-color: ${colors.white};

    font-family: ${font.default};
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    letter-spacing: 0.18em;
    color: ${(props) => props.warning ? `${colors.red}` : `${colors.white}`};

    &::placeholder {
      color: ${colors.gray4};
      font-family: ${font.default};
      font-weight: 400;
      font-size: 1rem;
      letter-spacing: 0.18em;
      line-height: 19px;
    }
    &:focus{
      color: ${colors.white};
    }
  }

  & input[type=date] {
    ::-webkit-calendar-picker-indicator {
      display: none;
    }
    ::-webkit-inner-spin-button{
      display: none;
    }
  }
  & input[type=number] {
    ::-webkit-inner-spin-button{
      opacity: 0;
    }
  }
`

export const DropdownStyled = styled.div<WarningType>`
  width: 100%;
  height: 53px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  
  background-color: ${colors.gray2};
  color: ${colors.gray4};
  padding: 0 1rem;
  border-radius: 5px;
  transition: all .1s ease-in;
  margin-top: 18px;

  font-family: ${font.default};
  
  position: relative;

  ${(props) => props.warning 
    ? css`border: 2px solid ${colors.red_dark};
          color: ${colors.red};
          animation: ${shake} 0.1s 4 ease-in;`
    : css`border: 2px solid transparent;`
  }

  &:focus-within {
    border: 2px solid ${colors.orange_light};
    color: ${colors.white};
  }

  & label {
    position: absolute;
    top: -18px;
    left: 0;
    
    font-style: normal;
    font-weight: 400;
    font-size: 0.625rem;
    line-height: 12px;
    letter-spacing: 0.18em;
    color: ${colors.gray7}
  }

  & select {
    width: 100%;
    height: 100%;
    background: ${colors.gray2};
    color: ${colors.gray5};
    border: none;
    outline: none;
    font-family: ${font.default};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.18em;
  }

`
export const WarningStyled = styled.span<WarningType>`
  width: 100%;
  visibility: ${props => props.warning ? 'visible' : 'hidden'};

  color: ${colors.red};
  font-family: ${font.default};
  font-size: 0.625rem;
  font-weight: 400;
  transition: all 0.1s ease-in;
`