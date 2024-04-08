import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface MenuResponse {
  cardapio: Prato[]
}

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    adress: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Food[], void>({
      query: () => '/restaurantes'
    }),
    getBannerRestaurant: builder.query<Food, string>({
      query: (id) => `/restaurantes/${id}`
    }),
    getCardapio: builder.query<MenuResponse, string>({
      query: (id) => `/restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body: body
      })
    })
  })
})
export const {
  useGetRestaurantesQuery,
  useGetBannerRestaurantQuery,
  useGetCardapioQuery,
  usePurchaseMutation
} = api
export default api
