import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import CoffeeImage from "../../../../assets/pageassets/american.svg";
import { CartContext } from "../../../../contexts/CoffeeOrderContext";
import {
  CoffeeCartContainer,
  CoffeeContainer,
  CoffeePriceContainer,
  CoffeeTagsContainer,
} from "./styles";
interface CoffeeProps {
  productId: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
}

export function Coffee({
  productId,
  title,
  description,
  tags,
  price,
}: CoffeeProps) {
  const priceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price / 100);

  const [itemQuantity, setItemQuantity] = useState(0);
  const { purchaseItem } = useContext(CartContext);

  function handleAddQuantityToItem() {
    setItemQuantity((state) => state + 1);
  }

  function handleRemoveQuantityToItem() {
    setItemQuantity((state) => {
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    });
  }

  function handleAddProductToCart(productId: string) {
    purchaseItem(productId, itemQuantity);
  }

  return (
    <CoffeeContainer>
      <img src={CoffeeImage} alt='' />
      <CoffeeTagsContainer>
        {tags.map((tag) => (
          <span key={tag}>{tag} </span>
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
            <Minus onClick={handleRemoveQuantityToItem} />
            <span>{itemQuantity}</span>
            <Plus onClick={handleAddQuantityToItem} />
          </div>
          <div>
            <ShoppingCart
              weight='fill'
              onClick={() => {
                handleAddProductToCart(productId);
              }}
            />
          </div>
        </CoffeeCartContainer>
      </CoffeePriceContainer>
    </CoffeeContainer>
  );
}
