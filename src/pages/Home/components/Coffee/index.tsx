import { Minus, Plus, ShoppingCart } from "phosphor-react";
import CoffeeImage from "../../../../assets/pageassets/american.svg";
import { CoffeeContainer, CoffeeTagsContainer } from "./styles";
interface CoffeeProps {
  title: string;
  description: string;
  tags: string[];
  price: number;
}

export function Coffee({ title, description, tags, price }: CoffeeProps) {
  const priceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price / 100);

  return (
    <CoffeeContainer>
      <img src={CoffeeImage} alt='' />
      <CoffeeTagsContainer>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeTagsContainer>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <span>{priceFormatted}</span>
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
