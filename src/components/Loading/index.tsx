import { Logo } from "../Logo";
import { LoadingWrapperStyled } from "./loading.styled";

interface LoadingType {
  loading: boolean
}

export function Loading({ loading }:LoadingType) {
  return (
    <LoadingWrapperStyled loading={loading}>
      <Logo 
       color="1"
       variation="noText"
       width={130}
      />
    </LoadingWrapperStyled>
  )
}