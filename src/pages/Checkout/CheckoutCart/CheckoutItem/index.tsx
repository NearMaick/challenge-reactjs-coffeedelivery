import { Minus, Plus, Trash } from "phosphor-react";
import { useState } from "react";
import {
  ItemContainer,
  ItemCounterContainer,
  ItemCounterContent,
} from "./styles";

interface CheckoutItemProps {
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export function CheckoutItem({
  title,
  imageUrl,
  price,
  quantity,
}: CheckoutItemProps) {
  const [cartCounter, setCartCounter] = useState(quantity);

  const priceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price / 100);

  function handleAddQuantityToItem() {
    setCartCounter((state) => state + 1);
  }

  function handleRemoveQuantityToItem() {
    setCartCounter((state) => state - 1);
  }

  return (
    <ItemContainer>
      <img src={imageUrl} alt='' />
      <ItemCounterContainer>
        <div>{title}</div>
        <ItemCounterContent>
          <div>
            <Minus onClick={handleRemoveQuantityToItem} />
            <span>{cartCounter}</span>
            <Plus onClick={handleAddQuantityToItem} />
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
