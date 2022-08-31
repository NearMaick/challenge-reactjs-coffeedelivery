import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPin,
  Money,
} from "phosphor-react";
import {
  CheckoutFormContainer,
  CheckoutFormHeaderContainer,
  Form,
  PaymentTypeContainer,
} from "./styles";

export function CheckoutForm() {
  return (
    <CheckoutFormContainer>
      <h2>Complete seu pedido</h2>

      <CheckoutFormHeaderContainer>
        <div>
          <MapPin />
          <span>Endereço de Entrega</span>
        </div>
        <p>Informe o endereço onde deseja receber seu pedido:</p>
      </CheckoutFormHeaderContainer>
      <Form>
        <div>
          <input type='number' placeholder='CEP' />
          <input type='text' placeholder='Rua' />
        </div>
        <input type='number' placeholder='Número' />
        <input type='text' placeholder='Complemento' />
        <input type='text' placeholder='Opcional' />

        <input type='number' placeholder='Bairro' />
        <input type='text' placeholder='Cidade' />
        <input type='text' placeholder='UF' />
      </Form>
      <div>
        <div>
          <CurrencyDollarSimple />

          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
        <PaymentTypeContainer>
          <span>
            <CreditCard /> cartão de crédito
          </span>

          <span>
            <Bank /> cartão de débito
          </span>

          <span>
            <Money /> dinheiro
          </span>
        </PaymentTypeContainer>
      </div>
    </CheckoutFormContainer>
  );
}
