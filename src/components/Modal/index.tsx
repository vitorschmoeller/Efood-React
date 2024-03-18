import * as S from './styles'
import Button from '../Button'
import close from '../../assets/close1.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Prato } from '../../pages/Home'

export type Props = {
  image: string
  title: string
  description: string
  id: number
  portion?: string
}

export type Comida = {
  comida: Prato
}
// export const Modal = ({ description, image, title, id, portion }: Props) => {
export const Modal = ({ comida }: Comida) => {
  const [modal, setModal] = useState(false)

  const dispatch = useDispatch()
  const getDescription = (descricao: string) => {
    if (descricao.length > 160) {
      return descricao.slice(0, 157) + '...'
    }
  }
  return (
    <>
      <S.Modal className="visible">
        <S.ModalContent className="container">
          <img src={close} alt="fechar" onClick={() => setModal(false)} />
          <img src={comida.foto} alt="pizza" />
          <div>
            <h4>{comida.nome}</h4>
            <p>
              {comida.descricao}
              <br></br>
              <br />
              {comida.porcao}
            </p>
            <Button type={'button'} onClick={() => dispatch(open())}>
              Adicionar ao carrinho - R$ 60,90
            </Button>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModal(false)}></div>
      </S.Modal>
    </>
  )
}

export default Modal
