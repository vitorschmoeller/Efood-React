import ProductList from '../../components/ProductList'

import Header from '../../components/Header'
import { useEffect, useState } from 'react'

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Food extends Cardapio {
  id: number
  titulo: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
}

const Home = () => {
  const [menu, setMenu] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setMenu(res))
  }, [])

  return (
    <>
      <Header />
      <ProductList foods={menu} />
    </>
  )
}

export default Home
