import * as S from './styles'
import Button from '../Button'
import close from '../../assets/close1.png'
import { useState } from 'react'
export type Props = {
  image: string
  title: string
  description: string
  id: number
  portion: string
}

const Product2 = ({ description, image, title, id, portion }: Props) => {
  const [modal, setModal] = useState(false)

  const getDescription = (descricao: string) => {
    if (descricao.length > 160) {
      return descricao.slice(0, 157) + '...'
    }
  }

  return (
    <>
      <S.Card>
        <S.Img src={image} alt="pizza" />
        <S.Comida>{title}</S.Comida>
        <S.P>{getDescription(description)}</S.P>
        <Button type="button" onClick={() => setModal(true)}>
          Adicione ao carrinho
        </Button>
      </S.Card>
      <S.Modal className={modal ? 'visible' : ''}>
        <S.ModalContent className="container">
          <img src={close} alt="fechar" onClick={() => setModal(false)} />
          <img src={image} alt="pizza" />
          <div>
            <h4>{title}</h4>
            <p>
              {description}
              <br></br>
              <br />
              {portion}
            </p>
            <Button type={'button'}>Adicionar ao carrinho - R$ 60,90</Button>
          </div>
        </S.ModalContent>
        <div className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default Product2
