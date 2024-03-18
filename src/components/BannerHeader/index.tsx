import {
  Header,
  HeaderContainer,
  CardButton,
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
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type Props = {
  food: Food
}

const BannerHeader = ({ food }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  return (
    <>
      <Header style={{ backgroundImage: `url(${hero})` }}>
        <HeaderContainer className="container">
          <Titulo>Restaurantes</Titulo>
          <Link to={'/'}>
            <Img src={logo} alt="logo" />
          </Link>
          <CardButton onClick={() => dispatch(open())} href="#">
            {items.length} produtos(s) no carrinho
          </CardButton>
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
