import { useContext } from "react";
import { CartContext } from "../../contexts/CoffeeOrderContext";
import { CheckoutCart } from "./CheckoutCart";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutContainer, SummaryContainer } from "./styles";

export function Checkout() {
  const { fetchCart, totalOrder } = useContext(CartContext);

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
      <CheckoutForm />
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
        </SummaryContainer>
        <button>confirmar pedido</button>
      </div>
    </CheckoutContainer>
  );
}
