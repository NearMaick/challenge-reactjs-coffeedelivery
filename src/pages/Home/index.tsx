import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeeImage from "../../assets/coffeeimage.svg";
import {
  ContentContainer,
  HomeCoffeeFeaturesContainer,
  HomeCoffeeFeaturesContent,
  HomeContainer,
  ImageContainer,
} from "./styles";

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
        <HomeCoffeeFeaturesContainer>
          <div>
            <HomeCoffeeFeaturesContent backgroundColor='yellow-600'>
              <ShoppingCart weight='fill' />
              Compra simples e segura
            </HomeCoffeeFeaturesContent>
            <HomeCoffeeFeaturesContent backgroundColor='yellow-500'>
              <Timer weight='fill' />
              Entrega rápida e rastreada
            </HomeCoffeeFeaturesContent>
          </div>
          <div>
            <HomeCoffeeFeaturesContent backgroundColor='gray-800'>
              <Package weight='fill' />
              Embalagem mantém o café intacto
            </HomeCoffeeFeaturesContent>
            <HomeCoffeeFeaturesContent backgroundColor='purple-800'>
              <Coffee weight='fill' />O café chega fresquinho até você
            </HomeCoffeeFeaturesContent>
          </div>
        </HomeCoffeeFeaturesContainer>
      </div>
      <ImageContainer>
        <img src={CoffeeImage} alt='' />
      </ImageContainer>
    </HomeContainer>
  );
}
