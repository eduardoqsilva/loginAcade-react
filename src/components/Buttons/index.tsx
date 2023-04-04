import { ButtonStyled } from "./buttons.styled";

interface ButtonType {
  text: string
  type?: 'button' | 'submit' | 'reset'
  variation?: 'primary' | 'secundary'
  radius?: number
  click?: () => void
}

export function Button({text,type, click, variation = 'primary', radius = 5}:ButtonType) {
  return (
    <ButtonStyled 
      type={type}
      onClick={click}
      variation={variation}
      radius={radius}

    >
      {text}
    </ButtonStyled>
  )
}