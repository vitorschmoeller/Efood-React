import { Container, List } from './styles'
import Product2 from '../Product2'

import { Cardapio } from '../../pages/Home'

export type Props = {
  foods: Cardapio[]
}
const ProductList2 = ({ foods }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {foods.map((food) => (
            <>
              <li key={food.id}>
                <Product2
                  id={food.id}
                  key={food.id}
                  description={food.descricao}
                  image={food.foto}
                  title={food.nome}
                />
              </li>
            </>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList2
