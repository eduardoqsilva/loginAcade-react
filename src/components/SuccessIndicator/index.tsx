import { CheckCircle, IconContext, XCircle } from "@phosphor-icons/react";
import { colors } from "../../styles/variables";
import { ContainerStyled } from "./successIndicator.styled";

interface Indicator {
  success: boolean
  show: boolean
}

export function SuccessIndicator({success, show}:Indicator) {
  const color = success ? colors.green_light : colors.red
  return (
    <ContainerStyled show={show}>
      <div className="indicator">
        <div className="img">
          <IconContext.Provider 
            value={{
              color: `${color}`,
              size: 100,
              weight: 'regular'
            }}
          >
            {success ? <CheckCircle/> : <XCircle/>}
          </IconContext.Provider>
        </div>
        <h2>{success ? 'Sucesso' : 'Erro'}</h2>
      </div>
    </ContainerStyled>
  )
}