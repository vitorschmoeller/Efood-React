import { useParams } from 'react-router-dom'
import BannerHeader from '../../components/BannerHeader'
import ProductList2 from '../../components/ProductList2'

import { useEffect, useState } from 'react'
import { Food } from '../Home'

const SaibaMais = () => {
  const { id } = useParams()

  const [food, setFood] = useState<Food[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setFood(res))
  }, [id])

  if (!food) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <BannerHeader />
      <ProductList2 foods={food} />
    </>
  )
}

export default SaibaMais
