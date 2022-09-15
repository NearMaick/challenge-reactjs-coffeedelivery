import styled from "styled-components";

export const CheckoutFormContainer = styled.div``;

export const CheckoutFormHeaderContainer = styled.header`
  margin: 1.25rem;

  display: flex;
  align-items: center;

  line-height: 1.5rem;

  svg {
    width: 2rem;
    height: 2rem;

    margin-bottom: 1rem;

    padding: 0 0.5rem 0.5rem 0;

    color: ${(props) => props.theme["yellow-500"]};
  }

  span {
    font-weight: 600;
  }
`;

export const Form = styled.form`
  input {
    width: 28rem;
    border: 1px solid ${(props) => props.theme["gray-400"]};
    border-radius: 8px;
    margin: 1rem;
    padding: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  div + div {
    flex-direction: row;

    input {
      margin: 1rem 0 1rem 1rem;
      width: 10rem;
    }

    input:nth-child(3) {
      width: 6rem;
    }
  }
`;

export const PaymentTypeContainer = styled.div`
  display: flex;
  align-items: center;

  line-height: 1.5rem;

  svg {
    width: 2rem;
    height: 2rem;
    margin-bottom: 2.5rem;

    padding: 0 0.5rem 0.5rem 0;

    color: ${(props) => props.theme["purple-500"]};
  }

  span {
    font-weight: 600;
  }
`;

export const PaymentTypeContent = styled.div`
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    background: ${(props) => props.theme["yellow-100"]};
    display: flex;
    align-items: center;

    font-size: 0.825rem;

    padding: 1rem 0.125rem;

    cursor: pointer;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;

    padding: 0.25rem;

    margin-right: 0.25rem;

    color: ${(props) => props.theme["purple-500"]};
  }
`;
