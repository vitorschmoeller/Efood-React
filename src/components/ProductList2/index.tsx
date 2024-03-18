import { Container, List } from './styles'
import Product2 from '../Product2'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import Modal from '../Modal'
import { Prato } from '../../pages/Home'
export type Props = {
  foods: Prato[]
}

const ProductList2 = ({ foods }: Props) => {
  const dispatch = useDispatch()

  if (!foods) {
    return <h3>Carregando...</h3>
  }

  return (
    <Container>
      <div className="container">
        <List>
          {foods.map((food) => (
            <li key={food.id}>
              <Product2
                description={food.descricao}
                image={food.foto}
                title={food.nome}
                portion={food.porcao}
                id={food.id}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList2
