import logo from '../../assets/logoEfood.png'
import instagram from '../../assets/instagramLogo.svg'
import twitter from '../../assets/twiterLogo.svg'
import facebook from '../../assets/facebookLogo.svg'

import * as S from './styles'
const Footer = () => (
  <S.Container>
    <img src={logo} alt="" />
    <S.RedeSociais>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </S.RedeSociais>
    <S.P>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.{' '}
    </S.P>
  </S.Container>
)

export default Footer
