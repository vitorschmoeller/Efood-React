import ProductList from '../../components/ProductList'

import Header from '../../components/Header'
import { useEffect, useState } from 'react'

import { useGetRestaurantesQuery } from '../../services/api'

export interface Prato {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Food = {
  id: number
  titulo: string
  tipo: string
  destacado?: boolean
  avaliacao: string
  descricao: string
  capa: string
  cardapio?: Prato[]
}

const Home = () => {
  const { data, isLoading } = useGetRestaurantesQuery()
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
