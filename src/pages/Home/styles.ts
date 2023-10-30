import styled from "styled-components";

export const ContentContainer = styled.div`
  padding: 1rem 1rem;

  @media (min-width: 768px) {
    padding: 1%.5 10rem;
  }

  @media (min-width: 1120px) {
    padding: 1.5rem 10rem;
  }
`

export const HeaderContent = styled.div`
  display: flex;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 4rem;
    line-height: 130%;
    color: ${props => props.theme['base-title']};
  }

  h3 {
    font-size: 2rem;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
    flex: 1
  }

  img {
    display: none;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      p {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg {
          padding: 0.5rem;
          border-radius: 50%;
          background: ${props => props.theme['yellow-dark']};
        }
      }
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3rem;
      line-height: 130%;
    }

    h3 {
      font-size: 1.25rem;
      line-height: 130%;
    }
    img {
      display: block;
      max-width: 320px;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    img {
      /* max-width: 476; */
    }
  }
`

export const MainContent = styled.main`
  padding: 3rem 0;
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem 0;
`