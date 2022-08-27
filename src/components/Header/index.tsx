import { MapPin, ShoppingCart } from "phosphor-react";
import CoffeeLogo from "../../assets/coffeelogo.svg";
import {
  CartButton,
  HeaderContainer,
  LogoContainer,
  MapContentContainer,
  ShoppingCartContainer,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={CoffeeLogo} alt='' />
      </LogoContainer>
      <ShoppingCartContainer>
        <MapContentContainer>
          <MapPin size={32} weight='fill' />
          <span>São Paulo</span>
        </MapContentContainer>
        <CartButton>
          <ShoppingCart size={32} weight='fill' />
        </CartButton>
      </ShoppingCartContainer>
    </HeaderContainer>
  );
}
