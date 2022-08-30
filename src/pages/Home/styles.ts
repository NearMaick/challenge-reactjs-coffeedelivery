import styled, { DefaultTheme } from "styled-components";

interface HomeCoffeeFeaturesContainerProps {
  backgroundColor: keyof DefaultTheme;
}

export const HomeContainer = styled.div`
  display: flex;
`;

export const HomeCoffeeFeaturesContainer = styled.div`
  margin: 0 1rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  line-height: 1.5rem;
`;

export const HomeCoffeeFeaturesContent = styled.p<HomeCoffeeFeaturesContainerProps>`
  display: flex;
  align-items: center;

  margin-top: 1rem;

  svg {
    margin-right: 0.5rem;

    background-color: ${(props) => props.theme[props.backgroundColor]};

    border-radius: 9999px;

    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    color: ${(props) => props.theme.white};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem 1.5rem;

  h1 {
    line-height: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 2rem;

  img {
    height: 20rem;
    width: 18rem;
  }
`;

export const CoffeeListContainer = styled.div``;
