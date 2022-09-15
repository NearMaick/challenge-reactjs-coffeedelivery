import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPin,
  Money,
} from "phosphor-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "../../contexts/CoffeeOrderContext";
import { CheckoutCart } from "./CheckoutCart";
import {
  CheckoutFormContainer,
  CheckoutFormHeaderContainer,
  Form,
  PaymentTypeContainer,
  PaymentTypeContent,
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

  const { register, handleSubmit } = useForm();

  function handleCreateNewOrder(data: any) {
    console.log(data);
  }

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
        <Form id='checkout-form' onSubmit={handleSubmit(handleCreateNewOrder)}>
          <div>
            <input
              type='number'
              placeholder='CEP'
              {...register("zip-code", { valueAsNumber: true })}
            />
            <input type='text' placeholder='Rua' {...register("street")} />
          </div>
          <div>
            <input
              type='number'
              placeholder='Número'
              {...register("number", { valueAsNumber: true })}
            />
            <input
              type='text'
              placeholder='Complemento'
              {...register("adjunct")}
            />
            <input
              type='text'
              placeholder='Opcional'
              {...register("adjunct")}
            />
          </div>
          <div>
            <input type='text' placeholder='Bairro' {...register("district")} />
            <input type='text' placeholder='Cidade' {...register("city")} />
            <input type='text' placeholder='UF' {...register("state")} />
          </div>
          <PaymentTypeContainer>
            <CurrencyDollarSimple />
            <div>
              <h4>Pagamento</h4>
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
        </Form>
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
