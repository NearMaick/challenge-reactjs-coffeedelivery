import styled from "styled-components";

export const CheckoutFormContainer = styled.div``;

export const CheckoutFormHeaderContainer = styled.header``;

export const Form = styled.form`
  input {
    border: 1px solid ${(props) => props.theme["gray-400"]};
    border-radius: 8px;
    margin: 1rem;
    padding: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const PaymentTypeContainer = styled.div``;
