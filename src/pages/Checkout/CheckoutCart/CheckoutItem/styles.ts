import styled from "styled-components";

export const ItemContainer = styled.div`
  background: ${(props) => props.theme["purple-100"]};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  div:nth-child(3) {
    font-weight: 900;
    margin-bottom: 6rem;
  }

  svg {
    color: ${(props) => props.theme["purple-500"]};
  }
`;

export const ItemCounterContainer = styled.div``;

export const ItemCounterContent = styled.div`
  display: flex;

  div {
    text-transform: uppercase;

    margin: 0.5rem 0.5rem 0.5rem 0;

    display: flex;
    align-items: center;

    border-radius: 8px;

    span {
      margin: 0 0.5rem;
    }

    span:last-child {
      font-size: 0.825rem;
    }
  }
`;
