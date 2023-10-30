import { createContext, ReactNode, useReducer } from "react"
import { Cart, cartReducer, CartStateProps, ProductCartProps } from "../reducer/reducer"
import { 
  addNewCartAction, 
  changeCartAction, 
  finishedPurchaseAction, 
  removeItemCartAction 
} from "../reducer/action"

export interface CartContextProps {
  cartState: CartStateProps
  createNewCart: (data: ProductCartProps) => void
  changeCart: (data: ProductCartProps) => void
  finishedPurchase: () => void
  changeItemCart: (data: ProductCartProps, type: string) => void
  removeItemCart: (data: ProductCartProps) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
    activeCartId: null
  })

  function createNewCart(data: ProductCartProps) {
    const id = String(new Date().getTime())
    const newCart: Cart = {
      id,
      products: [data],
      quantityItems: data.quantity,
      totalPrice: data.price,
    }

    dispatch(addNewCartAction(newCart))
  }

  function changeCart(data: ProductCartProps) {
    const activeCart = cartState.cart.find((cart) => cart.id === cartState.activeCartId)

    if (!activeCart) {
      return
    }

    const itemAlready = activeCart.products.find((product: ProductCartProps) => product.id === data.id)

    if (itemAlready) {
      itemAlready.quantity += data.quantity
    } else {
      activeCart.products.push(data)
    }

    const totalPrice = data.price * data.quantity

    activeCart.totalPrice += totalPrice
    activeCart.quantityItems += data.quantity

    dispatch(changeCartAction(activeCart))
  }

  function changeItemCart(data: ProductCartProps, type: string) {
    const activeCart = cartState.cart.find((cart) => cart.id === cartState.activeCartId)

    if (!activeCart) {
      return
    }

    if (type === "increase") {
      activeCart.totalPrice += data.price
      activeCart.quantityItems += 1
    } else if (type === "decrease") {
      activeCart.totalPrice -= data.price
      activeCart.quantityItems -= 1
    }

    dispatch(changeCartAction(activeCart))
  }

  function removeItemCart(data: ProductCartProps) {
    const activeCart = cartState.cart.find((cart) => cart.id === cartState.activeCartId)

    if (!activeCart) {
      return
    }

    const newCartItems = activeCart.products.filter((item: ProductCartProps) => item.id !== data.id)
    const newTotalPrice = activeCart.totalPrice - (data.price * data.quantity)
    const newQuantityItems = activeCart.quantityItems - data.quantity
    
    activeCart.products = newCartItems
    activeCart.totalPrice = newTotalPrice
    activeCart.quantityItems = newQuantityItems

    dispatch(removeItemCartAction(activeCart))
  }

  function finishedPurchase() {
    dispatch(finishedPurchaseAction())
  }

  return (
    <CartContext.Provider value={{ 
      cartState,
      createNewCart,
      changeCart,
      finishedPurchase,
      changeItemCart,
      removeItemCart
    }}>
      {children}
    </CartContext.Provider>
  )
}