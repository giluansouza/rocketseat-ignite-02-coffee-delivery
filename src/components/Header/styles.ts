import { ShoppingCart } from "phosphor-react";
import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  width: ${px2vw(320, 320)};
  padding: 2rem 1rem;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 2rem 10rem;
  }

  @media (min-width: 1120px) {
    padding: 2rem 10rem;
  }

  div {
    display: flex;
  }
`

export const LocationButton = styled.button`
  background: ${(props) => props.theme["purple-light"]};
  border: 0;
  cursor: pointer;
  border-radius: 6px;
  padding: 0.5rem;
  margin-right: 0.75rem;
  color: ${(props) => props.theme["purple-dark"]};

  display: flex;
  align-items: center;
`

export const CartButton = styled(NavLink)`
  background: ${(props) => props.theme["yellow-light"]};
  border: 0;
  cursor: pointer;
  border-radius: 6px;
  padding: 0.5rem;
  position: relative;

  span {
    top: 0;
    background: ${(props) => props.theme["yellow-dark"]};
    position: absolute;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    padding: 0.25rem 0.5rem;
  }
`

export const ShoppingCartIcon = styled(ShoppingCart)`
  color: ${(props) => props.theme["yellow-dark"]};
`