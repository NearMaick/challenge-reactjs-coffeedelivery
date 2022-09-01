import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import DeliverymanImage from "../../assets/pageassets/deliveryman.svg";
import { SuccessContainer, TitleMainContainer } from "./styles";

export function Success() {
  return (
    <SuccessContainer>
      <h2>Uhu! Pedido Confirmado</h2>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>
      <TitleMainContainer>
        <div>
          <section>
            <MapPin />
            <div>
              <p>
                Entrega em <span>Rua Dom Pedro, 55</span>
              </p>
              <p>São Paulo, SP</p>
            </div>
          </section>
          <section>
            <Clock />
            <div>
              <p>Previsão de entrega:</p>
              <span>20 - 30 min</span>
            </div>
          </section>
          <section>
            <CurrencyDollar />
            <div>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </div>
          </section>
        </div>
        <figure>
          <img src={DeliverymanImage} alt='' />
        </figure>
      </TitleMainContainer>
    </SuccessContainer>
  );
}
