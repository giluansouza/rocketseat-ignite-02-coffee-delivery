import { CoffeeCard } from '../../components/CoffeeCard'
import { ContentContainer, HeaderContent, MainContent, ProductsContainer } from './styles'
import coffeeBanner from '../../assets/coffee-banner.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { ProductCartProps } from '../../reducer/reducer'

export interface CartProps {
  id: string
  products: ProductCartProps[]
  quantityItems: number
  totalPrice: number
}

const products = [
  {
    id: "1",
    name: 'Expresso Tradicional',
    category: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 6.9,
    image: 'http://localhost:5173/src/assets/products/expresso-tradicional.svg',
  },
  {
    id: "2",
    name: 'Expresso Americano',
    category: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    image: 'http://localhost:5173/src/assets/products/expresso-americano.svg',
  },
  {
    id: "3",
    name: 'Expresso Cremoso',
    category: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    image: 'http://localhost:5173/src/assets/products/expresso-cremoso.svg',
  },
  {
    id: "4",
    name: 'Expresso Gelado',
    category: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    image: 'http://localhost:5173/src/assets/products/expresso-gelado.svg',
  },
  {
    id: "5",
    name: 'Café com Leite',
    category: ['Tradicional', 'Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 5.9,
    image: 'http://localhost:5173/src/assets/products/cafe-com-leite.svg',
  },
  {
    id: "6",
    name: 'Latte',
    category: ['Tradicional', 'Leite'],
    description: 'Uma dose de café com o dobro de leite e espuma cremosa',
    price: 9.9,
    image: 'http://localhost:5173/src/assets/products/latte.svg',
  },
  {
    id: "7",
    name: 'Capuccino',
    category: ['Tradicional', 'Leite'],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 12.90,
    image: 'http://localhost:5173/src/assets/products/capuccino.svg',
  },
  {
    id: "8",
    name: 'Macchiato',
    category: ['Tradicional', 'Leite'],
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 12.90,
    image: 'http://localhost:5173/src/assets/products/macchiato.svg',
  },
  {
    id: "9",
    name: 'Mocaccino',
    category: ['Tradicional', 'Com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 12.90,
    image: 'http://localhost:5173/src/assets/products/mocaccino.svg',
  },
  {
    id: "10",
    name: 'Chocolate Quente',
    category: ['Tradicional', 'Com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 8.90,
    image: 'http://localhost:5173/src/assets/products/chocolate-quente.svg',
  },
  {
    id: "11",
    name: 'Cubano',
    category: ['Especial', 'Alcoólico', 'Gelado'],
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 14.90,
    image: 'http://localhost:5173/src/assets/products/cubano.svg',
  },
  {
    id: "12",
    name: 'Havaiano',
    category: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    image: 'http://localhost:5173/src/assets/products/havaiano.svg',
  },
  {
    id: "13",
    name: 'Árabe',
    category: ['Especial'],
    description: 'Bebida preparada com grãos de cafe arábica',
    price: 9.90,
    image: 'http://localhost:5173/src/assets/products/arabe.svg',
  },
  {
    id: "14",
    name: 'Irlandês',
    category: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    image: 'http://localhost:5173/src/assets/products/irlandes.svg',
  }
]

export function Home() {
  const { createNewCart, changeCart, cartState } = useContext(CartContext)

  function handleCreateNewCart(product: ProductCartProps) {
    if (cartState.activeCartId) {
      changeCart(product)
      return
    }
    createNewCart(product)
  }

  return (
    <ContentContainer>
      <HeaderContent>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>

          <div>
            <p>
              <ShoppingCart weight='fill' size={32} color='white' />
              Compra simples e segura
            </p>
            <p>
              <Package weight='fill' size={32} color='white' />
              Embalagem mantém o café intacto
            </p>
            <p>
              <Timer weight='fill' size={32} color='white' />
              Entrega rápida e rastreada
            </p>
            <p>
              <Coffee weight='fill' size={32} color='white' />
              O café chega fresquinho até você
            </p>
          </div>
        </div>
        <img src={coffeeBanner} alt="" />
      </HeaderContent>
      <MainContent>
        <h2>Nossos cafés</h2>
        <ProductsContainer>
          {
            products.map(product => (
              <CoffeeCard key={product.id} {...product} addItemCart={handleCreateNewCart} />
            ))
          }
        </ProductsContainer>
      </MainContent>
    </ContentContainer>
  )
}