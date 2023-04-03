import { InputWrapperStyled } from "./inputs.styled";
import { IconContext, IconProps } from "@phosphor-icons/react";
import React, { useState, FocusEvent, useEffect } from "react";
import * as regex from "../../constants/regex"
import * as msg from "../../constants/inputErrorMessages";

type SetState = React.Dispatch<React.SetStateAction<any>>;
interface TextInputType {
  icon: React.ReactElement<IconProps>
  type: 'email' | 'text' | 'number' | 'date' | 'password'
  placeholder: string
  label: string
  characters?: {min: number, max: number}
  getValue: [SetState, any, string] | SetState
  requered?: boolean
}

export function Input({ icon, type, placeholder, label, characters, getValue, requered}: TextInputType) {

  const [warning, setWarning] = useState(false)
  const [value, setValue] = useState('')
  
  const typeOfRegex = regex[type as keyof typeof regex]


  useEffect(() => {
    if(Array.isArray(getValue)) {
      const [setValueOut, valueOut, key] = getValue
      setValueOut({
        ...valueOut,
        [key]: value 
      })
    }else {
      getValue(value)
    }
  },[value])

  function handleSetValue(e:FocusEvent<HTMLInputElement>) {
    const value = (
        type === 'email' 
        ?e.currentTarget.value.trim().toLowerCase()
        : e.currentTarget.value.trim()
    )

    if(typeOfRegex.test(value)) {
      if(characters !== undefined) {
        if(value.length >= characters.min) {
          setValue(value)
          setWarning(false)
        } else {
          setWarning(true)
        }
      } else {
        setWarning(false)
        setValue(value)
      }
    } else {
      setWarning(true)
      console.log('não passou na regex')
    }
  }
  function setErrorMessage(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.setCustomValidity(msg[type as keyof typeof msg])
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
        onBlur={handleSetValue}
        onInvalid={setErrorMessage}
        placeholder={placeholder}
        type={type}
        maxLength={characters?.max}
        required={requered}
      />
    </InputWrapperStyled>
  )
}