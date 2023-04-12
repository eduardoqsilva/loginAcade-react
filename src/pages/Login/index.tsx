import { FormEvent, useRef, useState } from "react";
import { At, LockKey } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Buttons";
import { Input } from "../../components/Inputs";
import { Loading } from "../../components/Loading";
import { Logo } from "../../components/Logo";
import { Splash } from "../../components/Splash";
import { SuccessIndicator } from "../../components/SuccessIndicator";
import { BackgroundStyled, ContainerStyled, FormStyled, WrapperLoginStyled } from "./login.styled";


export function Login() {

  const navigate = useNavigate()
  const [load, setLoad] = useState(false)
  const refLogo = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState([true, false])
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  function handleOnSubmit(e:FormEvent) {
    e.preventDefault()
    console.log('enviou')
    setIndicator([true, true])
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
      <SuccessIndicator indicate={indicator} redirect={'/home'}/>
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
              requered
            />
            <Input 
              icon={<LockKey/>}
              label={'SENHA'}
              getValue={[setValues, values, 'email']}
              type={'password'}
              placeholder={'••••••••••••'}
              variation={'02'}
              requered
            />
            <div className="buttons">
              <Button 
                text="Login"
                type="submit"
                radius={8}
              />
              <Button 
                click={handleRegister}
                text="Cadastro"
                variation="secundary"
                type="button"
                radius={8}
              />
            </div>
          </FormStyled>
          <h6>Ao continuar você aceita os <Link to={'/terms'}>termos de uso</Link></h6>
        </WrapperLoginStyled>
      </ContainerStyled>
    </>
  )
}