import { useContext } from "react";
import { CartContext } from "../../../contexts/CoffeeOrderContext";
import { CheckoutItem } from "./CheckoutItem";
import { CheckoutCartContainer } from "./styles";

export function CheckoutCart() {
  const { fetchCart } = useContext(CartContext);

  return (
    <CheckoutCartContainer>
      <h3>Cafés selecionados</h3>
      {fetchCart()?.map(({ id, imageUrl, price, title, quantity = 0 }) => (
        <CheckoutItem
          key={id}
          imageUrl={imageUrl}
          price={price}
          title={title}
          quantity={quantity}
        />
      ))}
    </CheckoutCartContainer>
  );
}
