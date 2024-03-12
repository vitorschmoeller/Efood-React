import {
  Header,
  HeaderContainer,
  LinkCard,
  Img,
  Titulo,
  Banner,
  BannerTitulo,
  Span,
  BannerContainer,
  Overlay
} from './styles'
import logo from '../../assets/logoEfood.png'
import hero from '../../assets/fundo.png'
import banner from '../../assets/bannerComida.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Food } from '../../pages/Home'

type Props = {
  food: Food
}

const BannerHeader = ({ food }: Props) => {
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
      <Banner style={{ backgroundImage: `url(${food.capa})` }}>
        <Overlay />
        <BannerContainer className="container">
          <Span>{food.tipo}</Span>
          <BannerTitulo>{food.titulo}</BannerTitulo>
        </BannerContainer>
      </Banner>
    </>
  )
}

export default BannerHeader
