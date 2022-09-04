import { Minus, Plus, Trash } from "phosphor-react";
import { useState } from "react";
import CoffeeImage from "../../../../assets/pageassets/american.svg";
import {
  ItemContainer,
  ItemCounterContainer,
  ItemCounterContent,
} from "./styles";

export function CheckoutItem() {
  const [cartCounter, setCartCounter] = useState(0);

  function handleAddQuantityToItem() {
    setCartCounter((state) => state + 1);
  }

  function handleRemoveQuantityToItem() {
    setCartCounter((state) => state - 1);
  }

  return (
    <ItemContainer>
      <img src={CoffeeImage} alt='' />
      <ItemCounterContainer>
        <div>Expresso Tradicional</div>
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
        <span>990</span>
      </div>
    </ItemContainer>
  );
}
