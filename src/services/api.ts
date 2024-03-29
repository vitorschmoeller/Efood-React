import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Food, Prato } from '../pages/Home'

interface MenuResponse {
  cardapio: Prato[]
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Food[], void>({
      query: () => ''
    }),
    getBannerRestaurant: builder.query<Food, string>({
      query: (id) => `/${id}`
    }),
    getCardapio: builder.query<MenuResponse, string>({
      query: (id) => `/${id}`
    })
  })
})
export const {
  useGetRestaurantesQuery,
  useGetBannerRestaurantQuery,
  useGetCardapioQuery
} = api
export default api
