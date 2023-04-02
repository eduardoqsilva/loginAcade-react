import { InputWrapperStyled } from "./inputs.styled";
import { IconContext, IconProps } from "@phosphor-icons/react";
import React, { useState, FocusEvent } from "react";
import * as regex from "../../constants/regex"

interface TextInputType {
  icon: React.ReactElement<IconProps>
  typeOf: 'email' | 'text' | 'number' | 'date' | 'password'
  placeholder: string
  label: string
}
export function Input({ icon, typeOf, placeholder, label }: TextInputType) {

  const [warning, setWarning] = useState(false)
  const [value, setValue] = useState('')

  function handleSetValue(e:FocusEvent<HTMLInputElement>) {
    const value = e.currentTarget.value.trim()

    if(regex.mail.test(value) || value === '') {
      console.log(value)
      setWarning(false)
    } else {
      setWarning(true)
    }
  }

  return (
    <InputWrapperStyled warning={warning}>
      <IconContext.Provider value={{
        color: 'currentColor',
        size: 25,
        weight: "regular"
      }}
      >
        {icon}
      </IconContext.Provider>

      <label>{label}</label>
      <input 
        placeholder={placeholder}
        type={typeOf}
        onBlur={handleSetValue}
      />
    </InputWrapperStyled>
  )
}