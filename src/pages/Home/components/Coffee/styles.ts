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
