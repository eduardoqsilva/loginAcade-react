import { FormEvent, useRef, useState } from "react";
import { At, LockKey } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Buttons";
import { Input } from "../../components/Inputs";
import { Loading } from "../../components/Loading";
import { Logo } from "../../components/Logo";
import { Splash } from "../../components/Splash";
import { BackgroundStyled, ContainerStyled, FormStyled, WrapperLoginStyled } from "./login.styled";

export function Login() {

  const navigate = useNavigate()
  const [load, setLoad] = useState(false)
  const refLogo = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  function handleOnSubmit(e:FormEvent) {
    e.preventDefault()
  }
  function handleRegister() {
    setLoad(true)
    setTimeout(() =>{
      navigate('/register')
    }, 2000)
  }

  return (
    <>
      <Splash refL={refLogo}/>
      <BackgroundStyled />
      <Loading load={load}/>
      <ContainerStyled>
        <WrapperLoginStyled>
          <div ref={refLogo}>
            <Logo width={130}/>
          </div>
          <FormStyled onSubmit={handleOnSubmit}>
            <h2>Login</h2>
            <Input 
              icon={<At/>}
              label={'EMAIL'}
              getValue={[setValues, values, 'email']}
              type={'email'}
              placeholder={'seuemailaqui@mail.com'}
              variation={'02'}
            />
            <Input 
              icon={<LockKey/>}
              label={'SENHA'}
              getValue={[setValues, values, 'email']}
              type={'password'}
              placeholder={'••••••••••••'}
              variation={'02'}
            />
            <div className="buttons">
              <Button 
                text="Login"
                type="submit"
              />
              <Button 
                click={handleRegister}
                text="Cadastro"
                variation="secundary"
              />
            </div>
          </FormStyled>
        </WrapperLoginStyled>
      </ContainerStyled>
    </>
  )
}