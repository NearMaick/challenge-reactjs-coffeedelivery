import { CheckoutCart } from "./CheckoutCart";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutContainer, SummaryContainer } from "./styles";

interface CoffeeProps {
  id: string;
  price: number;
  quantity: number;
}

export function Checkout() {
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
