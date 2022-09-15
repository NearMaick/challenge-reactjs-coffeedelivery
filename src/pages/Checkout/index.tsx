import { MapPin } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CoffeeOrderContext";
import { CheckoutCart } from "./CheckoutCart";
import { CheckoutForm } from "./CheckoutForm";
import {
  CheckoutFormContainer,
  CheckoutFormHeaderContainer,
} from "./CheckoutForm/styles";
import { CheckoutContainer, SummaryContainer } from "./styles";

export function Checkout() {
  const { totalOrder } = useContext(CartContext);

  const orderTotalFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalOrder! / 100);

  const deliveryTax = 350;
  const deliveryTaxFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(deliveryTax / 100);

  const total = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format((totalOrder! + deliveryTax) / 100);

  return (
    <CheckoutContainer>
      <CheckoutFormContainer>
        <h2>Complete seu pedido</h2>

        <CheckoutFormHeaderContainer>
          <MapPin />
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido:</p>
          </div>
        </CheckoutFormHeaderContainer>
        <CheckoutForm id='checkout-form' />
      </CheckoutFormContainer>
      <div>
        <CheckoutCart />
        <SummaryContainer>
          <div>
            <span>Total de itens:</span>
            <span>{orderTotalFormatted}</span>
          </div>
          <div>
            <span>Enterga</span>
            <span>{deliveryTaxFormatted}</span>
          </div>
          <div>
            <span>Total</span>
            <span>{total}</span>
          </div>
          <button type='submit' form='checkout-form'>
            confirmar pedido
          </button>
        </SummaryContainer>
      </div>
    </CheckoutContainer>
  );
}
