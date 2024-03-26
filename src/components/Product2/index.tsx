import * as S from './styles'
import Button from '../Button'
import close from '../../assets/close1.png'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Prato } from '../../pages/Home'
import { RootReducer } from '../../store'

export type Props = {
  image: string
  title: string
  description: string
  id: number
  portion?: string
  price: number // Adicionando preço como propriedade
}

const Product2 = ({ description, image, title, id, portion, price }: Props) => {
  const [modal, setModal] = useState(false)

  const dispatch = useDispatch()

  const getDescription = (descricao: string) => {
    if (descricao.length > 160) {
      return descricao.slice(0, 157) + '...'
    }
    return descricao
  }

  const handleAddToCart = () => {
    const itemToAdd: Prato = {
      id,
      descricao: description,
      foto: image,
      nome: title,
      porcao: portion || '',
      preco: price
    }

    dispatch(add(itemToAdd))
    dispatch(open())
    setModal(false)
  }

  const buttonText = `Adicionar ao carrinho - R$ ${price.toFixed(2)}`

  return (
    <>
      <S.Card>
        <S.Img src={image} alt={title} />
        <S.Comida>{title}</S.Comida>
        <S.P>{getDescription(description)}</S.P>
        <Button
          type="button"
          onClick={() => {
            setModal(true)
          }}
        >
          Adicione ao carrinho
        </Button>
      </S.Card>
      <S.Modal className={modal ? 'visible' : ''}>
        <S.ModalContent className="container">
          <img src={close} alt="fechar" onClick={() => setModal(false)} />
          <img src={image} alt={title} />
          <div>
            <h4>{title}</h4>
            <p>
              {description}
              <br></br>
              <br />
              {portion}
            </p>
            <Button type={'button'} onClick={handleAddToCart}>
              {buttonText}
            </Button>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModal(false)}></div>
      </S.Modal>
    </>
  )
}

export default Product2
