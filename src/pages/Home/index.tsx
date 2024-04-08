import ProductList from '../../components/ProductList'
import Header from '../../components/Header'

import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data } = useGetRestaurantesQuery()
  if (!data) {
    return <h3>Carregando</h3>
  }
  return (
    <>
      <Header />
      <ProductList foods={data} />
    </>
  )
}

export default Home
