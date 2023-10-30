import { createContext, useContext, useState } from "react"

interface CartProps {
  id: string
}

interface CartContextType {
  cart: string
  setCart: (id: string) => void
}

const CartContext = createContext({} as CartContextType)

function Checkout() {
  const { cart, setCart } = useContext(CartContext)

  return <div>
    Checkout {cart}
    <button onClick={() => setCart("New")}>Clique</button>  
  </div>
}

function Success() {
  const { cart } = useContext(CartContext)

  return <div>Sucesso {cart}</div>
}

export function TestContext() {
  const [cart, setCart] = useState<string>("1")

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Checkout />
      <Success />
    </CartContext.Provider>
  )
}