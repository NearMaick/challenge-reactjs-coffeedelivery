import { useContext } from "react";
import { CartContext } from "../../../contexts/CoffeeOrderContext";
import { CheckoutItem } from "./CheckoutItem";
import { CheckoutCartContainer } from "./styles";

export function CheckoutCart() {
  const { coffeeListOrder } = useContext(CartContext);

  return (
    <CheckoutCartContainer>
      <h3>Cafés selecionados</h3>
      {coffeeListOrder.map(({ id, imageUrl, price, title }) => (
        <CheckoutItem
          key={id}
          imageUrl={imageUrl}
          price={price}
          title={title}
        />
      ))}
    </CheckoutCartContainer>
  );
}
