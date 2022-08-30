import { Minus, Plus, ShoppingCart } from "phosphor-react";
import CoffeeImage from "../../../../assets/pageassets/american.svg";
import { CoffeeContainer } from "./styles";
interface CoffeeProps {
  title: string;
  description: string;
  tags: string[];
  price: number;
}

export function Coffee({ title, description, tags, price }: CoffeeProps) {
  return (
    <CoffeeContainer>
      <img src={CoffeeImage} alt='' />
      <p>
        {tags.map((tag) => (
          <span key={tag}>{tag} </span>
        ))}
      </p>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <span>{price}</span>
        <div>
          <Plus />
          <span>1</span>
          <Minus />
        </div>
        <ShoppingCart weight='fill' />
      </div>
    </CoffeeContainer>
  );
}
