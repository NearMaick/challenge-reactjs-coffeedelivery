import { Minus, Plus, Trash } from "phosphor-react";
import CoffeeImage from "../../../../assets/pageassets/american.svg";

export function CheckoutItem() {
  return (
    <div>
      <img src={CoffeeImage} alt='' />
      <div>Expresso Tradicional</div>
      <div>
        <div>
          <Minus />
          <span>1</span>
          <Plus />
        </div>
        <div>
          <Trash />
          <span>Remover</span>
        </div>
      </div>
      <div>
        <span>990</span>
      </div>
    </div>
  );
}
