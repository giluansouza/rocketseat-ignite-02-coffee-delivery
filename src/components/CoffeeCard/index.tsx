import {
  CardAddCart, 
  CardContainer, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardOptionCart, 
  CardPrice,
  ShoppingCartIcon
} from "./styles";

interface ProductCartProps {
  id: string
  name: string
  category: string[]
  description: string
  price: number
  image: string
  quantity: number
}

interface CoffeeCardProps {
  id: string;
  name: string;
  category: string[];
  description: string;
  price: number;
  image: string;
  addItemCart: (product: ProductCartProps) => void
}
import menos from '../../assets/menos.svg'
import plus from '../../assets/plus.svg'
import { useState } from "react";

export function CoffeeCard(props: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  function handlePlusQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    if (quantity === 1) {
      return
    }
    setQuantity((state) => state - 1)
  }

  function handleAddItemCart() {
    props.addItemCart({
      id: props.id,
      name: props.name,
      category: props.category,
      description: props.description,
      price: props.price,
      image: props.image,
      quantity
    })
  }

  return (
    <CardContainer>
      <CardHeader>
        <img src={props.image} alt={props.name} />
      </CardHeader>
      <CardContent>
        <div>
          {props.category.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </CardContent>
      <CardFooter>
        <CardPrice>
          R$ <strong>{props.price}</strong>
        </CardPrice>

        <CardOptionCart>
          <div>
            <button onClick={handleDecreaseQuantity}>
              <img src={menos} />
            </button>
            <span>{quantity}</span>
            <button onClick={handlePlusQuantity}>
              <img src={plus} />
            </button>
          </div>
          <CardAddCart onClick={handleAddItemCart}>
            <ShoppingCartIcon weight="fill" size={24} />
          </CardAddCart>
        </CardOptionCart>
      </CardFooter>
    </CardContainer>
  )
}