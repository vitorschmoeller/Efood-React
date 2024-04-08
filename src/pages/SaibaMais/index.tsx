import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import BannerHeader from '../../components/BannerHeader'
import ProductList2 from '../../components/ProductList2'

import {
  useGetBannerRestaurantQuery,
  useGetCardapioQuery
} from '../../services/api'

const SaibaMais = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState<Prato[]>([])

  const { data: bannerData } = useGetBannerRestaurantQuery(id!)
  const { data: menuData, isLoading } = useGetCardapioQuery(id!)

  useEffect(() => {
    if (menuData) {
      setCardapio(menuData.cardapio)
    }
  }, [menuData]) //

  if (!bannerData || isLoading) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <BannerHeader food={bannerData} />
      <ProductList2 foods={cardapio} />
    </>
  )
}

export default SaibaMais
