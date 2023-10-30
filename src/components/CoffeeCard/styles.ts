import { ShoppingCart } from "phosphor-react";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 0 1.5rem 1.125rem;
  background: ${(props) => props.theme["base-card"]};

  width: 260px;
  
  @media (min-width: 1280px) {
    width: calc(25% - 1.5rem);
  }
  /* min-width: 220px; */
  border-radius: 6px 48px;
`

export const CardHeader = styled.div`
  img {
    margin-top: -20%;
  }
`

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;

  div {
    display: flex;
    gap: 0.5rem;
  }

  span {
    font-size: 0.75rem;
    border-radius: 20px;
    padding: 0.25rem 0.5rem;
    background-color: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
  }

  h3 {
    font: 700 1.125rem 'Baloo 2', sans-serif;
    color: ${props => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme["base-label"]};
  }
`
export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardPrice = styled.span`
  font: 400 0.875rem 'Baloo 2', sans-serif;

  strong {
    font-size: 1.25rem;
  }
`

export const CardOptionCart = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    padding: 0.5rem;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['base-button']};

    span {
      font-size: 1.25rem;
      /* color: ${props => props.theme['purple']}; */
    }

    button {
      background: none;
      border: 0;
      cursor: pointer;
    }
  }
`

export const CardAddCart = styled.button`
  background: ${(props) => props.theme["purple-dark"]};
  padding: 0.5rem;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  transition: background 1s;

  &:hover {
    background: ${(props) => props.theme["purple"]}
  }
`

export const ShoppingCartIcon = styled(ShoppingCart)`
  color: ${(props) => props.theme['white']};
`