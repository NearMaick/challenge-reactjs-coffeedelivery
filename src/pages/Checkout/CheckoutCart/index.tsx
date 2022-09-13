import { CheckoutItem } from "./CheckoutItem";
import { CheckoutCartContainer } from "./styles";

interface CoffeeProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export function CheckoutCart() {
  const cartList = localStorage.getItem("@coffee-delivery:cart-state-1.0.0");

  const coffeeListOrder: CoffeeProps[] = cartList && JSON.parse(cartList);

  return (
    <CheckoutCartContainer>
      <h3>Cafés selecionados</h3>
      {coffeeListOrder.map(({ id, imageUrl, price, title, quantity }) => (
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
