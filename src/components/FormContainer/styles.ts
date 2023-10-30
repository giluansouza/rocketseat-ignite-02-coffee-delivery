import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface RowProps {
  columns: string;
}

export const Row = styled.div<RowProps>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  gap: 16px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme["base-input"]};
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:placeholder{
    color: ${(props) => props.theme["base-text"]};
  }
`;
