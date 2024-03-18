import { useParams } from 'react-router-dom'
import BannerHeader from '../../components/BannerHeader'
import ProductList2 from '../../components/ProductList2'
import {
  useGetBannerRestaurantQuery,
  useGetCardapioQuery
} from '../../services/api'
import { useEffect, useState } from 'react'
import { Food, Prato } from '../Home'
import Modal from '../../components/Modal'

const SaibaMais = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState()
  const [food, setFood] = useState<Prato[]>()

  const { data } = useGetBannerRestaurantQuery(id!)
  const { data: menu, isLoading } = useGetCardapioQuery(id!)
  console.log(data)
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res.cardapio))
  }, [id])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setFood(res.cardapio))
  }, [id])

  if (!menu) {
    return <h3>Carregando...</h3>
  }
  if (!data) {
    return <h3>Carregando...</h3>
  }
  if (!food) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <BannerHeader food={data} />
      <ProductList2 foods={menu} />
    </>
  )
}

export default SaibaMais
