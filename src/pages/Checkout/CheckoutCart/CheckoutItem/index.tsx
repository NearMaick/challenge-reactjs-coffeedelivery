import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CoffeeOrderContext";
import {
  ItemContainer,
  ItemCounterContainer,
  ItemCounterContent,
} from "./styles";

interface CheckoutItemProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export function CheckoutItem({
  id,
  title,
  imageUrl,
  price,
  quantity,
}: CheckoutItemProps) {
  const [cartCounter, setCartCounter] = useState(quantity);
  const { purchaseItem } = useContext(CartContext);

  const priceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price / 100);

  function handleAddQuantityToItem(id: string) {
    setCartCounter((state) => state + 1);
    purchaseItem(id, quantity + 1);
  }

  function handleRemoveQuantityToItem(id: string) {
    setCartCounter((state) => state - 1);
    purchaseItem(id, quantity - 1);
  }

  return (
    <ItemContainer>
      <img src={imageUrl} alt='' />
      <ItemCounterContainer>
        <div>{title}</div>
        <ItemCounterContent>
          <div>
            <Minus onClick={() => handleRemoveQuantityToItem(id)} />
            <span>{cartCounter}</span>
            <Plus onClick={() => handleAddQuantityToItem(id)} />
          </div>
          <div>
            <Trash />
            <span>Remover</span>
          </div>
        </ItemCounterContent>
      </ItemCounterContainer>
      <div>
        <span>{priceFormatted}</span>
      </div>
    </ItemContainer>
  );
}
