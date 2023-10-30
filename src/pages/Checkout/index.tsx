import { Bank, CreditCard, CurrencyDollar, MapPin, Money, Trash } from 'phosphor-react'
import { 
  AddressContainer, 
  AddressHeader, 
  ButtonSubmit, 
  Card, 
  CardContent, 
  CartContainer,
  CartListItems,
  CheckoutContainer, 
  FooterCard, 
  FormContainer, 
  InformationContainer, 
  LeftContainer, 
  RightContainer
} from './styles'
import { useContext, useState } from 'react'
import { FormContent } from '../../components/FormContainer'
import { CartContext } from '../../context/CartContext'
import { ProductCartProps } from '../../reducer/reducer'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { RadioButtonIcon, RadioButtonLabel, RadioButtonInput } from '../../components/RadioButton/styles'
import { useNavigate } from 'react-router-dom';


type Inputs = {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  payment: string
}

export function Checkout() {
  const { cartState, finishedPurchase, changeItemCart, removeItemCart } = useContext(CartContext)
  const [selectedOption, setSelectedOption] = useState('credito')

  const [ cartItems ] = cartState.cart

  // function handleRadioButtonChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setSelectedOption(event.target.value)
  // }

  function handleIncreaseItem(itemId: string) {
    const cartItem = cartItems.products.find((item: ProductCartProps) => item.id === itemId)

    if (!cartItem) {
      return
    }

    cartItem.quantity += 1

    changeItemCart(cartItem, "increase")
  }

  function handleDecreaseItem(itemId: string) {
    const cartItem = cartItems.products.find((item: ProductCartProps) => item.id === itemId)

    if (!cartItem) {
      return
    }

    cartItem.quantity -= 1

    changeItemCart(cartItem, "decrease")
  }

  function handleRemoverItemCart(itemId: string) {
    const itemToBeRemoved: ProductCartProps | undefined = 
      cartItems.products.find((item: ProductCartProps) => item.id === itemId)

    if (!itemToBeRemoved) {
      return
    }

    removeItemCart(itemToBeRemoved)
  }

  const method = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)

    finishedPurchase()
  }

  return (
    <form onSubmit={method.handleSubmit(onSubmit)}>
      {cartState.cart.length > 0  && 
        <CheckoutContainer>
          <LeftContainer>
            <h3>Complete seu pedido</h3>
            <AddressContainer>
              <AddressHeader>
                <MapPin size={24} color="#C47F17" />
                <div>
                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </AddressHeader>
              <FormProvider {...method}>
                <FormContent />
              </FormProvider>
            </AddressContainer>
            <AddressContainer>
              <AddressHeader>
                <CurrencyDollar size={24} weight="thin" />
                <div>
                  <h3>Pagamento</h3>
                  <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
              </AddressHeader>
              <FormContainer>
                <RadioButtonLabel 
                  htmlFor="field-sun"
                  checked={selectedOption === 'credito'}
                >
                  <RadioButtonInput
                    {...method.register("payment")}
                    type="radio"
                    value="credito"
                    id="field-sun"
                  />
                  <RadioButtonIcon>
                    <CreditCard size={16} />
                  </RadioButtonIcon>
                  Cartão de crédito
                </RadioButtonLabel>
                <RadioButtonLabel 
                  htmlFor="field-sun"
                  checked={selectedOption === 'debito'}
                >
                  <RadioButtonInput
                    {...method.register("payment")}
                    type="radio"
                    value="debito"
                    id="field-sun"
                  />
                  <RadioButtonIcon>
                    <Bank size={16} />
                  </RadioButtonIcon>
                  Cartão de débito
                </RadioButtonLabel>
                <RadioButtonLabel 
                  htmlFor="field-sun"
                  checked={selectedOption === 'dinheiro'}
                >
                  <RadioButtonInput
                    {...method.register("payment")}
                    type="radio"
                    value="dinheiro"
                    id="field-sun"
                  />
                  <RadioButtonIcon>
                    <Money size={16} />
                  </RadioButtonIcon>
                  Dinheiro
                </RadioButtonLabel>
              </FormContainer>
            </AddressContainer>
          </LeftContainer>
          <RightContainer>
            <h3>Cafés selecionados</h3>
            <CartContainer>
              <CartListItems>
                {cartItems?.products.map((item: ProductCartProps) => (
                  <Card key={item.id}>
                    <img src={item.image} alt="" />
                    <CardContent>
                      <p>{item.name}</p>
                      <div>
                        <button onClick={() => handleDecreaseItem(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleIncreaseItem(item.id)}>+</button>
                      </div>
                      <button onClick={() => handleRemoverItemCart(item.id)}>
                        <Trash size={16} />
                      </button>
                    </CardContent>
                    <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                  </Card>
                ))}
              </CartListItems>

              <InformationContainer>
                <div>
                  <span>Total de itens</span>
                  <span>R$ {cartItems?.totalPrice.toFixed(2)}</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$ 3,50</span>
                </div>
                <div>
                  <strong>Total</strong>
                  <strong>R$ {(cartItems?.totalPrice + 3.50).toFixed(2)}</strong>
                </div>
              </InformationContainer>

              <FooterCard>
                <ButtonSubmit
                  type="submit"
                  // className={cartState.cart.length === 0 ? "disabled" : ""}
                >
                    Confirmar pedido
                </ButtonSubmit>
              </FooterCard>

            </CartContainer>
          </RightContainer>
        </CheckoutContainer>
      }
    </form> 
  )
}