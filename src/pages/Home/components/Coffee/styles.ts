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
`;
