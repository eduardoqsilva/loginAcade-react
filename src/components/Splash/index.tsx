import { useEffect, useState } from "react";
import { Logo } from "../Logo";
import { SplashWrapper } from "./splash.styled";
import { useRef } from "react";

interface type {
  refL: React.RefObject<HTMLDivElement>
}
export function Splash({refL}:type) {
  const [show, setShow] = useState(true)
  const [position, setPosition] = useState<number>()

  setTimeout(() => {
    setShow(false)
  },2500)

  useEffect(() => {
    if(refL.current) {
      const pos = refL.current?.getBoundingClientRect()
      const height= Math.round(pos.height / 2) //metade do logo         
      setPosition(Math.round(pos.top ) + height)//pegando metade do logo e somando com a distância do topo da pagina até a boda superior da div
    }
  }, [useRef])

  return (
    <SplashWrapper position={position} show={show}>
      <Logo width={130} color={'2'}/>
    </SplashWrapper>
  )
}
