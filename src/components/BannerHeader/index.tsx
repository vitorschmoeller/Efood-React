import {
  Header,
  HeaderContainer,
  LinkCard,
  Img,
  Titulo,
  Banner,
  BannerTitulo,
  Span,
  BannerContainer
} from './styles'
import logo from '../../assets/logoEfood.png'
import hero from '../../assets/fundo.png'
import banner from '../../assets/bannerComida.png'
import { Link } from 'react-router-dom'

const BannerHeader = () => {
  return (
    <>
      <Header style={{ backgroundImage: `url(${hero})` }}>
        <HeaderContainer className="container">
          <Titulo>Restaurantes</Titulo>
          <Link to={'/'}>
            <Img src={logo} alt="logo" />
          </Link>
          <LinkCard href="#">0 produtos(s) no carrinho</LinkCard>
        </HeaderContainer>
      </Header>
      <Banner style={{ backgroundImage: `url(${banner})` }}>
        <BannerContainer className="container">
          <Span>Italiana</Span>
          <BannerTitulo>La Dolce Vita Trattoria</BannerTitulo>
        </BannerContainer>
      </Banner>
    </>
  )
}

export default BannerHeader
