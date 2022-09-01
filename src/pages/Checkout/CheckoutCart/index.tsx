import { CheckoutItem } from "./CheckoutItem";
import { CheckoutCartContainer } from "./styles";

export function CheckoutCart() {
  return (
    <CheckoutCartContainer>
      <h3>Cafés selecionados</h3>
      <CheckoutItem />
      <CheckoutItem />
    </CheckoutCartContainer>
  );
}
