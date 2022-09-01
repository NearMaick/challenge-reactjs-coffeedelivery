import { Minus, Plus, Trash } from "phosphor-react";
import CoffeeImage from "../../../../assets/pageassets/american.svg";
import {
  ItemContainer,
  ItemCounterContainer,
  ItemCounterContent,
} from "./styles";

export function CheckoutItem() {
  return (
    <ItemContainer>
      <img src={CoffeeImage} alt='' />
      <ItemCounterContainer>
        <div>Expresso Tradicional</div>
        <ItemCounterContent>
          <div>
            <Minus />
            <span>1</span>
            <Plus />
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
