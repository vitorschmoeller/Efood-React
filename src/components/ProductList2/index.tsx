import Product2 from '../Product2'

import { Container, List } from './styles'
export type Props = {
  foods: Prato[]
}

const ProductList2 = ({ foods }: Props) => {
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
                price={food.preco}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList2
