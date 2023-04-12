import { useEffect } from "react";
import { colors } from "../../styles/variables";
import { ContainerStyled } from "./successIndicator.styled";
import { useNavigate } from "react-router-dom";
import { CheckCircle, IconContext, XCircle } from "@phosphor-icons/react";


interface Indicator {
  indicate: boolean[] //success / show
  redirect?: string
}

export function SuccessIndicator({indicate, redirect}:Indicator) {
  const color = indicate[0] ? colors.green_light : colors.red
  const navigate = useNavigate()

  useEffect(() => {
    if(redirect && indicate[0] && indicate[1]) {
      setTimeout(() => {
          navigate(redirect)
      }, 1500)  
    }
  },[indicate[1]])

  return (
    <ContainerStyled show={indicate[1]}>
      <div className="indicator">
        <div className="img">
          <IconContext.Provider 
            value={{
              color: `${color}`,
              size: 100,
              weight: 'regular'
            }}
          >
            {indicate[0] ? <CheckCircle/> : <XCircle/>}
          </IconContext.Provider>
        </div>
        <h2>{indicate[0] ? 'Sucesso' : 'Erro'}</h2>
      </div>
    </ContainerStyled>
  )
}