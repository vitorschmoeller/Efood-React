import { useParams } from 'react-router-dom'
import BannerHeader from '../../components/BannerHeader'
import ProductList2 from '../../components/ProductList2'

import { useEffect, useState } from 'react'
import { Food } from '../Home'

const SaibaMais = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState([])
  const [food, setFood] = useState<Food>()
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res.cardapio))
  }, [id])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setFood(res))
  })

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }
  if (!food) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <BannerHeader food={food} />
      <ProductList2 foods={cardapio} />
    </>
  )
}

export default SaibaMais
