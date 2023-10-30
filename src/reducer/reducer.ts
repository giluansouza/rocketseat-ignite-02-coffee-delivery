import { ActionTypes } from "./action"

export interface ProductCartProps {
  id: string
  name: string
  category: string[]
  description: string
  price: number
  image: string
  quantity: number
}

export interface Cart {
  id: string
  products: ProductCartProps[]
  quantityItems: number
  totalPrice: number
}

export interface CartStateProps {
  cart: Cart[],
  activeCartId: string | null
}

interface CartReducerAction {
  type: ActionTypes
  payload?: {
    currentCart: Cart
  }
}

export function cartReducer(state: CartStateProps, action: CartReducerAction) {
  
  if (!action.payload) {
    return state
  }

  if (action.type === ActionTypes.CREATE_NEW_CART) {
    return {
      ...state,
      cart: [...state.cart, action.payload.currentCart],
      activeCartId: action.payload.currentCart.id
    }
    // Com IMMER
    // return produce(state, (draft) => {
    //   draft.cart.push(action.payload.newCart)
    //   draft.activeCartId = action.payload.newCart.id
    // })
  }

  if (action.type === ActionTypes.CHANGE_CART) {
    return {
      ...state,
      cart: [...state.cart, action.payload.currentCart],
      activeCartId: action.payload.currentCart.id
    }
  }

  if (action.type === ActionTypes.REMOVE_ITEM_CART) {
    return {
      ...state,
      cart: [...state.cart, action.payload.currentCart],
      activeCartId: action.payload.currentCart.id
    }
  }

  if (action.type === ActionTypes.FINISHED_PURCHASE) {
    return {
      ...state,
      cart: [],
      activeCartId: null
    }
  }

  return state
}
