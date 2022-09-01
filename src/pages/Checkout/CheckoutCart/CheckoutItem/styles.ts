import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme["purple-100"]};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 1rem;
  padding: 1rem;

  div:nth-child(3) {
    font-weight: 900;
    padding-bottom: 3rem;
  }

  svg {
    color: ${(props) => props.theme["purple-500"]};

    height: 1rem;
    width: 1rem;
  }
`;

export const ItemCounterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemCounterContent = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    text-transform: uppercase;

    margin: 0.5rem 0.5rem 0.5rem 0;
    padding: 0.5rem;

    display: flex;
    align-items: center;

    border-radius: 8px;

    background: ${(props) => props.theme["purple-100"]};

    span {
      margin: 0 0.5rem;
    }

    span:last-child {
      font-size: 0.825rem;
    }
  }
`;
