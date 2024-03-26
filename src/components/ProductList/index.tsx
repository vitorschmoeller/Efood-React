import { Food } from '../../pages/Home'
import Product from '../Product'
import { List, Container } from './styles'

export type Props = {
  foods: Food[]
}

const ProductList = ({ foods }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {foods.map((food) => (
            <li key={food.id}>
              <Product
                id={food.id}
                key={food.id}
                description={food.descricao}
                image={food.capa}
                infos={food.tipo}
                review={food.avaliacao}
                title={food.titulo}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
