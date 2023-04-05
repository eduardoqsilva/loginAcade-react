import { At, Barbell, Calendar, Lock, Ruler, User } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { Button } from "../../components/Buttons"
import { Input } from "../../components/Inputs"

export function Login() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    date: '',
    height: '',
    weight: '',
  })
  useEffect(() => {
    console.log(values)
  },[values])

  return (
    <form action="">
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
      <Input 
        icon={<Calendar/>}
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
      <Button text="Finalizar"/>
     </form>
  )
}