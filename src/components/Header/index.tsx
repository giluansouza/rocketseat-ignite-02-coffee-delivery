import { CartButton, HeaderContainer, LocationButton, ShoppingCartIcon } from "./styles";
import coffeeDeliveryLogo from '../../assets/coffee-delivery.svg'
import { MapPin } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export function Header() {
  const { cartState } = useContext(CartContext)

  const [ cartItems ] = cartState.cart

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffeeDeliveryLogo} alt="logo marca coffee delivery" />
      </NavLink>
      <div>
        <LocationButton>
          <MapPin weight="fill" size={24} /> 
          Petrolina, PE
        </LocationButton>
        <CartButton to="/checkout">
          <ShoppingCartIcon weight="fill" size={24} />
          {cartItems?.quantityItems > 0 && <span>{cartItems?.quantityItems}</span>}
        </CartButton>
      </div>
    </HeaderContainer>
  )
}