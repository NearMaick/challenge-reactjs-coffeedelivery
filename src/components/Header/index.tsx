import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CoffeeLogo from "../../assets/coffeelogo.svg";
import { CartContext } from "../../contexts/CoffeeOrderContext";
import {
  CartButton,
  HeaderContainer,
  LogoContainer,
  MapContentContainer,
  ShoppingCartContainer,
} from "./styles";

export function Header() {
  const { fetchCart } = useContext(CartContext);

  const items = fetchCart()?.length;

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LogoContainer onClick={() => navigate("/")}>
        <img src={CoffeeLogo} alt='' />
      </LogoContainer>
      <ShoppingCartContainer>
        <MapContentContainer>
          <MapPin size={32} weight='fill' />
          <span>São Paulo, SP</span>
        </MapContentContainer>
        <CartButton onClick={() => navigate("/checkout")}>
          <ShoppingCart size={32} weight='fill' />
          <p>{items ? items : 0}</p>
        </CartButton>
      </ShoppingCartContainer>
    </HeaderContainer>
  );
}
