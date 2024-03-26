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
import { close, remove } from '../../store/reducers/cart'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const { items } = useSelector((state: RootReducer) => state.cart)
  console.log(items)

  const somaCarrinho = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

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
                <span>{formataPreco(food.preco)}</span>
              </div>
              <button type="button" onClick={() => dispatch(remove(food.id))} />
            </ListItem>
          ))}
        </List>
        <ValorContainer>
          <span>Valor total</span>
          <span>{formataPreco(somaCarrinho())} </span>
        </ValorContainer>
        <Button type="button">Continuar com a entrega</Button>
      </Aside>
    </CartContainer>
  )
}

export default Cart
