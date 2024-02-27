import { Container, List } from './styles'
import Product2 from '../Product2'
import FoodSaiba from '../../models/FoodSaiba'
export type Props = {
  foods: FoodSaiba[]
}
const ProductList2 = ({ foods }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {foods.map((food) => (
            <Product2
              key={food.id}
              description={food.description}
              image={food.image}
              title={food.title}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList2
