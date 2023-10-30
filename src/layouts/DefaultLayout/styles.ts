import styled from "styled-components";

export const LayoutContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1120px) {
    /* flex-wrap: nowrap; */
  }
`