import { useContext } from "react";
import { CartContext } from "../../../contexts/CoffeeOrderContext";
import { CheckoutItem } from "./CheckoutItem";
import { CheckoutCartContainer } from "./styles";

export function CheckoutCart() {
  const { coffeeListOrder } = useContext(CartContext);

  return (
    <CheckoutCartContainer>
      {coffeeListOrder.map((coffee) => (
        <pre key={coffee.id}>{JSON.stringify(coffee)}</pre>
      ))}
      <h3>Cafés selecionados</h3>
      <CheckoutItem />
    </CheckoutCartContainer>
  );
}
