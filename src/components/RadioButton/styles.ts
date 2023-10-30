import styled from 'styled-components';

export const RadioButtonLabel = styled.label`
  display: flex;
  flex: 1;
  padding: 0.5rem;
  align-items: center;
  background-color: ${props => props.theme["base-button"]};
  color: ${props => props.theme["base-text"]};
  border: 2px solid ${props => (props.checked ? '#007BFF' : 'transparent')};
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s;
  font-size: 0.75rem;

  &:hover {
    background-color: ${props => props.theme["base-hover"]}
  }

  &:checked {
    background-color: ${props => (
      props.checked ? 
        (props.theme["base-hover"]) : 
        '#aaa'
    )};
  }
`;

export const RadioButtonInput = styled.input`
  display: none;
`;

export const RadioButtonIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: white;
  margin-right: 10px;
`;