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
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, close, open } = cartSlice.actions
export default cartSlice.reducer
