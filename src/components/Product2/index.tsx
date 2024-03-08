import * as S from './styles'
import Button from '../Button'
import close from '../../assets/close1.png'
import { useState } from 'react'
export type Props = {
  image: string
  title: string
  description: string
  id: number
}

const Product2 = ({ description, image, title, id }: Props) => {
  const [modal, setModal] = useState(false)

  return (
    <>
      <S.Card>
        <S.Img src={image} alt="pizza" />
        <S.Comida>{title}</S.Comida>
        <S.P>{description}</S.P>
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
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              <br></br>
              <br />
              para qualquer ocasião. Serve: de 2 a 3 pessoas
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
