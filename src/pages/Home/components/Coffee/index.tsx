import { Minus, Plus, ShoppingCart } from "phosphor-react";
import CoffeeImage from "../../../../assets/pageassets/american.svg";
import {
  CoffeeCartContainer,
  CoffeeContainer,
  CoffeePriceContainer,
  CoffeeTagsContainer,
} from "./styles";
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
      <CoffeePriceContainer>
        <div>
          <span>{priceFormatted}</span>
        </div>
        <CoffeeCartContainer>
          <div>
            <Minus />
            <span>1</span>
            <Plus />
          </div>
          <div>
            <ShoppingCart weight='fill' />
          </div>
        </CoffeeCartContainer>
      </CoffeePriceContainer>
    </CoffeeContainer>
  );
}
