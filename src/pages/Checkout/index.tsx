import { useContext } from "react";
import { CartContext } from "../../contexts/CoffeeOrderContext";
import { CheckoutCart } from "./CheckoutCart";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutContainer, SummaryContainer } from "./styles";

export function Checkout() {
  const { fetchCart } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutForm />
      <div>
        <CheckoutCart />
        <SummaryContainer>
          <div>
            <span>Total de itens:</span>
            <span>2970</span>
          </div>
          <div>
            <span>Enterga</span>
            <span>350</span>
          </div>
          <div>
            <span>Total</span>
            <span>3320</span>
          </div>
        </SummaryContainer>
        <button>confirmar pedido</button>
      </div>
    </CheckoutContainer>
  );
}
