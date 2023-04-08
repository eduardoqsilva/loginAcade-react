import { At, Barbell, Cake, GenderIntersex, Lock, Ruler, User } from "@phosphor-icons/react"
import React, { useEffect, useState } from "react"
import { Button } from "../../components/Buttons"
import { Dropdown, Input } from "../../components/Inputs"
import { Logo } from "../../components/Logo"
import { SuccessIndicator } from "../../components/SuccessIndicator"
import { ContainerLoginStyled, FormStyled } from "./login.styled"

export function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    date: '',
    height: '',
    weight: '',
    sex: ''
  })
  const [indicator, setIndicator] = useState([true, false])

  useEffect(() => {
    console.log(values)
  },[values])

  function submit(e:React.FormEvent) {
    e.preventDefault()
    setIndicator([true, true])
  }

  return (
    <ContainerLoginStyled>
      <SuccessIndicator success={indicator[0]} show={indicator[1]}/>
      <Logo width={100}/>
      <FormStyled onSubmit={submit}>
        <h1>Cadastro</h1>
        <div className="form">
          <Input
            icon={<User/>}
            type={'text'}
            label={'Nome'}
            placeholder={'José Arrantes'}
            getValue={[setValues, values, 'name']}
            requered={true}
          />
          <Input
            icon={<At/>}
            type={'email'}
            label={'E-mail'}
            placeholder={'seumelhoremail@email.com'}
            getValue={[setValues, values, 'email']}
            requered={true}
          />
          <Input
            icon={<Lock/>}
            type={'password'}
            label={'Senha'}
            placeholder={'••••••••••••'}
            getValue={[setValues, values, 'password']}
            characters={{min: 8, max: 16}}
            requered={true}
          />
          <div className="grid">
            <Input
              icon={<Cake/>}
              type={'date'}
              label={'Data de nascimento'}
              getValue={[setValues, values, 'date']}
              requered={true}
            />
            <Input
              icon={<Ruler/>}
              type={'number'}
              label={'altura'}
              getValue={[setValues, values, 'height']}
              characters={{min: 4, max: 4}}
              placeholder={'1,78'}
              requered={true}
            />
            <Input
              icon={<Barbell/>}
              type={'number'}
              label={'Peso'}
              getValue={[setValues, values, 'weight']}
              characters={{min: 2, max: 5}}
              placeholder={'70,5kg'}
              requered={true}
            />
            <Dropdown 
              icon={<GenderIntersex />}
              label={"Sexo"}
              requered={true}
              getValue={[setValues, values, 'sex']}
              itens={['M', 'F']}
            />
          </div>
        </div>
        <Button text="Finalizar"/>
      </FormStyled>
    </ContainerLoginStyled>
  )
}