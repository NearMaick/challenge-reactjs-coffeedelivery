import styled from "styled-components";

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  padding: 0.5rem 2rem;
  border-radius: 8px;

  background: ${(props) => props.theme["gray-400"]};

  img {
    height: 10rem;
    width: 10rem;

    margin-top: -2rem;
  }

  h3,
  p {
    text-align: center;
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.625rem;
    line-height: 1rem;
    margin-bottom: 1rem;
  }
`;

export const CoffeeTagsContainer = styled.p`
  line-height: 2rem;

  span {
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: bold;
    background: ${(props) => props.theme["yellow-100"]};
    color: ${(props) => props.theme["yellow-600"]};
  }
`;

export const CoffeePriceContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;

  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span:first-child {
    font-weight: 800;
  }

  svg {
    margin: 0 0.2rem;
  }
`;

export const CoffeeCartContainer = styled.div`
  display: flex;

  div:first-child {
    background: ${(props) => props.theme.white};
    border-radius: 4px;

    svg {
      color: ${(props) => props.theme["purple-500"]};
      background: ${(props) => props.theme.white};
    }
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;

    padding: 0.25rem;
    color: ${(props) => props.theme["purple-500"]};
    border-radius: 4px;

    cursor: pointer;
  }

  div {
    svg {
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme["purple-500"]};
    }
  }
`;
