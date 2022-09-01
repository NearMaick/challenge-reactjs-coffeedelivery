import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 45vw);

  gap: 2.5rem;

  div {
    background: ${(props) => props.theme["purple-100"]};
    border-radius: 12px;
  }

  button {
    width: 100%;
    margin: 2rem auto;
    padding: 1rem;
    text-transform: uppercase;
    border: none;
    background: ${(props) => props.theme["yellow-500"]};
    color: ${(props) => props.theme.white};
    border-radius: 8px;
  }
`;

export const SummaryContainer = styled.div`
  margin-left: 1rem;

  div {
    margin: 0.5rem 0;
    display: flex;
    justify-content: space-between;
  }

  div:last-child {
    font-weight: 700;
  }
`;
