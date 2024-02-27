import logo from '../../assets/logoEfood.png'
import instagram from '../../assets/instagramLogo.svg'
import twitter from '../../assets/twiterLogo.svg'
import facebook from '../../assets/facebookLogo.svg'
import { Container, P, RedeSociais } from './styles'
const Footer = () => (
  <Container>
    <img src={logo} alt="" />
    <RedeSociais>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </RedeSociais>
    <P>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.{' '}
    </P>
  </Container>
)

export default Footer
