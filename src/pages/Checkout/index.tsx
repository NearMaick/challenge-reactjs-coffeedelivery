import { CheckoutCart } from "./CheckoutCart";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutForm />
      <CheckoutCart />
    </CheckoutContainer>
  );
}
