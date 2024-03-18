import Tag from '../Tag'
import pizza from '../../assets/pizza.png'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import {
  Aside,
  CartContainer,
  Overlay,
  List,
  ListItem,
  ValorContainer
} from './styled'
import { close } from '../../store/reducers/cart'
import { Prato } from '../../pages/Home'

type Props = {
  foods: Prato[]
}

const Cart = ({ foods }: Props) => {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const { items } = useSelector((state: RootReducer) => state.cart)
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(close())} />
      <Aside>
        <List>
          {items.map((food) => (
            <ListItem key={food.id}>
              <img src={food.foto} alt="" />
              <div>
                <h3>{food.nome}</h3>
                <span>{food.preco}</span>
              </div>
              <button type="button" />
            </ListItem>
          ))}
        </List>
        <ValorContainer>
          <span>Valor total</span>
          <span>R$ 182,70</span>
        </ValorContainer>
        <Button type="button">Continuar com a entrega</Button>
      </Aside>
    </CartContainer>
  )
}

export default Cart
