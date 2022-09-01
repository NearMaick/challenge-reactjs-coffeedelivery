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
  PaymentTypeContent,
} from "./styles";

export function CheckoutForm() {
  return (
    <CheckoutFormContainer>
      <h2>Complete seu pedido</h2>

      <CheckoutFormHeaderContainer>
        <MapPin />
        <div>
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido:</p>
        </div>
      </CheckoutFormHeaderContainer>
      <Form>
        <div>
          <input type='number' placeholder='CEP' />
          <input type='text' placeholder='Rua' />
        </div>
        <div>
          <input type='number' placeholder='Número' />
          <input type='text' placeholder='Complemento' />
          <input type='text' placeholder='Opcional' />
        </div>
        <div>
          <input type='text' placeholder='Bairro' />
          <input type='text' placeholder='Cidade' />
          <input type='text' placeholder='UF' />
        </div>
      </Form>

      <PaymentTypeContainer>
        <CurrencyDollarSimple />
        <div>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentTypeContainer>
      <PaymentTypeContent>
        <span>
          <CreditCard /> cartão de crédito
        </span>
        <span>
          <Bank /> cartão de débito
        </span>
        <span>
          <Money /> dinheiro
        </span>
      </PaymentTypeContent>
    </CheckoutFormContainer>
  );
}
