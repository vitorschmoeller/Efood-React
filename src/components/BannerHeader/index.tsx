import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/logoEfood.png'
import hero from '../../assets/fundo.png'

import { RootReducer } from '../../store'

import { open } from '../../store/reducers/cart'

import * as S from './styles'

type Props = {
  food: Food
}

const BannerHeader = ({ food }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  return (
    <>
      <S.Header style={{ backgroundImage: `url(${hero})` }}>
        <S.HeaderContainer className="container">
          <S.Titulo>Restaurantes</S.Titulo>
          <Link to={'/'}>
            <S.Img src={logo} alt="Clique aqui para voltar para home" />
          </Link>
          <S.CardButton role="button" onClick={() => dispatch(open())}>
            {items.length} produto(s) no carrinho
          </S.CardButton>
        </S.HeaderContainer>
      </S.Header>
      <S.Banner style={{ backgroundImage: `url(${food.capa})` }}>
        <S.Overlay />
        <S.BannerContainer className="container">
          <S.Span>{food.tipo}</S.Span>
          <S.BannerTitulo>{food.titulo}</S.BannerTitulo>
        </S.BannerContainer>
      </S.Banner>
    </>
  )
}

export default BannerHeader
