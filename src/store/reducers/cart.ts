import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Food, Prato } from '../../pages/Home'

type CardReducer = {
  items: Prato[]
  isOpen: boolean
}

const initialState: CardReducer = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)

      if (prato === undefined) {
        state.items.push(action.payload)
      } else {
        alert('Item já foi adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, close, open, remove } = cartSlice.actions
export default cartSlice.reducer
