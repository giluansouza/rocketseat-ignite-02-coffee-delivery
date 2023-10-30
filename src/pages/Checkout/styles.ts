import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  padding: 2rem 8rem;
  gap: 2rem;
`

export const LeftContainer = styled.div`
  width: calc(60% - 1rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const RightContainer = styled.div`
  width: calc(40% - 1rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const AddressContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`

export const AddressHeader = styled.div`
  display: flex;
  margin-bottom: 2rem;
`

export const Input = styled.input`
  width: 100%;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-input']};
  padding: 0.850rem;
  border: 0;
  color: ${(props) => props.theme['base-text']};
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
` 

export const CartContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 40px;
  padding: 2.5rem;
`

export const Card = styled.div`
  display: flex;
  gap: 1.25rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding: 1.5rem 0;

  img {
    width: 64px;
    height: 64px;
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;

  p {
    display: block;
  }

  button {
    padding: 0.25rem 0.5rem;
    border: 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme["base-button"]};
    cursor: pointer;
  }
`

export const InformationContainer = styled.div`
  padding: 1.5rem 0;

  div {
    display: flex;
    justify-content: space-between;
    margin: .75rem 0;

    strong {
      font-size: 1.25rem;
    }
  }
`

export const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonSubmit = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  background-color: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme['white']};
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  &.disabled {
    pointer-events: none; // Desabilita a interação do link
    background-color: ${(props) => props.theme['yellow-dark']}
  }
`

export const CartListItems = styled.div`
  max-height: 320px;
  overflow-y: auto;
`
