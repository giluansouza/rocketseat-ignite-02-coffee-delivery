import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
`

export const Information = styled.div`
  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    font-size: 1.25rem;
  }
`

export const InformationDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }
`

export const InformationData = styled.div`
  margin-top: 2.5rem;
  border: 1px solid transparent; /* Define uma borda transparente */
  border-image: linear-gradient(to right, #ff0000, #0000ff);
  border-image-slice: 1;
  border-radius: 6px 40px;
  padding: 2.5rem;
  
  ${InformationDataItem}:not(:first-child) {
    margin-top: 2.5rem;
  }
`