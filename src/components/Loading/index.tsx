import { Logo } from "../Logo";
import { LoadingWrapperStyled } from "./loading.styled";

interface LoadingType {
  load: boolean
}

export function Loading({ load = false }:LoadingType) {
  return (
    <LoadingWrapperStyled load={load}>
      <Logo 
       color="1"
       variation="noText"
       width={130}
      />
    </LoadingWrapperStyled>
  )
}