import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeeImage from "../../assets/coffeeimage.svg";
import { ContentContainer, HomeContainer, ImageContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <div>
        <ContentContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
        </ContentContainer>
        <div>
          <p>
            <ShoppingCart />
            Compra simples e segura
          </p>
          <p>
            <Timer />
            Entrega rápida e rastreada
          </p>
        </div>
        <div>
          <p>
            <Package />
            Embalagem mantém o café intacto
          </p>
          <p>
            <Coffee />O café chega fresquinho até você
          </p>
        </div>
      </div>
      <ImageContainer>
        <img src={CoffeeImage} alt='' />
      </ImageContainer>
    </HomeContainer>
  );
}
