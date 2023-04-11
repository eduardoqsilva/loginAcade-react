import { CaretLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ContainerStyled, WrapperStyled } from "./terms.style";

export function Terms(){
  return (
    <ContainerStyled>
      <WrapperStyled>
        <Link to={'/'}>
          <CaretLeft weight="bold" size={30} color={'currentColor'}/>
        </Link>

        <h1>Termos de uso</h1>
        <p>Ao se cadastrar no site acade, você concorda com os seguintes termos de uso:</p>
        <p>1. Você deve fornecer informações verdadeiras e atualizadas sobre si mesmo, como nome, email, senha, altura, peso e data de nascimento. Você é responsável por manter a confidencialidade da sua senha e não deve compartilhá-la com terceiros.</p>
        <p>2. Você deve usar o site acade de forma ética e respeitosa, não violando os direitos de propriedade intelectual, a privacidade ou a dignidade de outros usuários ou terceiros. Você não deve usar o site acade para fins ilegais, fraudulentos ou maliciosos.</p>
        <p>3. Você deve respeitar as regras e orientações do site acade, bem como as leis e regulamentos aplicáveis. Você não deve interferir no funcionamento do site acade ou tentar acessar áreas restritas ou não autorizadas.</p>
        <p>4. Você reconhece que o site acade não é responsável pelo conteúdo, qualidade, veracidade ou segurança dos serviços, produtos, informações ou anúncios oferecidos por outros usuários ou terceiros no site acade. Você deve exercer seu próprio julgamento e cautela ao utilizar esses serviços, produtos, informações ou anúncios.</p>
        <p>5. Você reconhece que o site acade não garante a disponibilidade, continuidade, precisão ou atualização do site acade ou de seus conteúdos. O site acade pode sofrer interrupções, erros, falhas ou atrasos por motivos técnicos, operacionais ou de força maior.</p>
        <p>6. Você reconhece que o site acade pode modificar, suspender ou encerrar o site acade ou qualquer parte dele a qualquer momento e sem aviso prévio. O site acade também pode modificar os termos de uso periodicamente e comunicar as alterações aos usuários.</p>
        <p>7. Você reconhece que o site acade pode coletar, armazenar e processar seus dados pessoais de acordo com a política de privacidade do site acade. Você autoriza o site acade a compartilhar seus dados pessoais com outros usuários ou terceiros para fins de prestação dos serviços do site acade ou para cumprir obrigações legais.</p>
        <p>8. Você reconhece que o site acade pode monitorar, moderar ou remover qualquer conteúdo que você publique no site acade se considerar que esse conteúdo viola os termos de uso, a política de privacidade ou os direitos de outros usuários ou terceiros.</p>
        <p>9. Você reconhece que o site acade pode aplicar sanções aos usuários que violarem os termos de uso, a política de privacidade ou os direitos de outros usuários ou terceiros. Essas sanções podem incluir a suspensão ou cancelamento da conta do usuário, a restrição ou bloqueio do acesso ao site acade ou a adoção de medidas legais cabíveis.</p>
        <p>10. Você reconhece que o site acade não é responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais que possam surgir do uso ou da impossibilidade de uso do site acade ou de seus conteúdos. Você isenta o site acade de qualquer reclamação ou demanda que possa surgir em relação ao uso do site acade ou de seus conteúdos.</p>
      </WrapperStyled>
    </ContainerStyled>
  )
}