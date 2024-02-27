import Food from '../../models/Food'
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
            <Product
              key={food.id}
              description={food.description}
              image={food.image}
              infos={food.infos}
              review={food.review}
              title={food.title}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
