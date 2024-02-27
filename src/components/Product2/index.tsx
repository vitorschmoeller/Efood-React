import * as S from './styles'
import Button from '../Button'

export type Props = {
  image: string
  title: string
  description: string
}

const Product2 = ({ description, image, title }: Props) => {
  return (
    <>
      <S.Card>
        <S.Img src={image} alt="pizza" />
        <S.Comida>{title}</S.Comida>
        <S.P>{description}</S.P>
        <Button type="link" to="/">
          Adicione ao carrinho
        </Button>
      </S.Card>
    </>
  )
}

export default Product2
