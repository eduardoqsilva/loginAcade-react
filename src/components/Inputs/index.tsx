import { DropdownStyled, InputWrapperStyled, WarningStyled } from "./inputs.styled";
import { IconContext, IconProps } from "@phosphor-icons/react";
import React, { useState, FocusEvent, useEffect, InvalidEvent, FormEventHandler } from "react";
import * as regex from "../../constants/regex"
import * as msg from "../../constants/inputErrorMessages";

type SetState = React.Dispatch<React.SetStateAction<any>>;
interface TextInputType {
  icon: React.ReactElement<IconProps>
  type: 'email' | 'text' | 'number' | 'date' | 'password'
  placeholder?: string
  label: string
  characters?: {min: number, max: number}
  getValue: [SetState, any, string] | SetState
  requered?: boolean
  replace?: boolean;
}

export function Input({ icon, type, placeholder, label, characters, getValue, requered, replace}: TextInputType) {

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
  function handleOnFocus(e: FocusEvent<HTMLInputElement>) {
    if(type === 'date') {
      e.currentTarget.showPicker()
    }
  }
  function handleSetValue(e:FocusEvent<HTMLInputElement>) {
    const valueTarget = (
        type === 'email' 
        ?e.currentTarget.value.trim().toLowerCase()
        : e.currentTarget.value.trim()
    )
    if(replace) {
      
    }

    if(typeOfRegex.test(valueTarget)) {
      if(characters !== undefined) {
        if(valueTarget.length >= characters.min) {
          if(valueTarget.length > characters.max) {
            const newValue = valueTarget.toString().slice(0, characters.max)
            e.currentTarget.value = newValue
            setValue(newValue)
          }else {
            setValue(valueTarget)
            setWarning(false)
          }
        } else {
          setWarning(true)
        }
      } else {
        setWarning(false)
        setValue(valueTarget)
      }
    } else {
      setWarning(true)
      console.log('não passou na regex: ' + value)
    }
  }
  function setErrorMessage(e:InvalidEvent<HTMLInputElement>) {
    if (typeOfRegex.test(e.currentTarget.value)) {
      e.currentTarget.setCustomValidity('')
    } else {
      e.currentTarget.setCustomValidity(msg[type as keyof typeof msg])
    }
  }
  return (
    <div>
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
          onChange={setErrorMessage}
          onFocus={handleOnFocus}
          placeholder={placeholder}
          maxLength={characters?.max}
          required={requered}
          type={type}
          step='0.01'
        />
      </InputWrapperStyled>
      <WarningStyled warning={warning} >
        {msg[type as keyof typeof msg]}
      </WarningStyled>
    </div>

  )
}

interface DropdownInputType {
  icon: React.ReactElement<IconProps>
  label: string
  getValue: [SetState, any, string] | SetState
  requered?: boolean
  itens: string[]
}

export function Dropdown({icon, label, getValue, requered, itens}:DropdownInputType) {
  const [warning, setWarning] = useState(false)

  function handleSetValue(e:React.ChangeEvent<HTMLSelectElement>) {
    const targetValue = e.currentTarget.value
    if(targetValue === ''){
      setWarning(true)
      e.currentTarget.setCustomValidity('Escolha uma opção')
    } else {
      setWarning(false)
      if(Array.isArray(getValue)){
        e.currentTarget.setCustomValidity('')
        const [setV, valueOut, key] = getValue
        setV({
          ...valueOut,
          [key]: targetValue
        })
      }
    }
  }

  return (
    <div>
      <DropdownStyled warning={warning}>
      <IconContext.Provider value={{
          color: 'currentColor',
          size: 25,
          weight: "regular"
        }}
        >
          {icon}
      </IconContext.Provider>

        <label>{label}</label>
        <select name="sexo" required={requered} onBlur={handleSetValue}>
            <option value="">--</option>
            {itens.map((i, id) => {
              return <option key={id} value={i}>{i}</option>
            })}
        </select>
      </DropdownStyled>
    </div>
  )
}