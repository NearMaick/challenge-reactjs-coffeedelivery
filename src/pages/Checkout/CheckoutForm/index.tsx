import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPin,
  Money,
} from "phosphor-react";
import { useForm } from "react-hook-form";
import {
  CheckoutFormContainer,
  CheckoutFormHeaderContainer,
  Form,
  PaymentTypeContainer,
  PaymentTypeContent,
} from "./styles";

export function CheckoutForm() {
  const { register, handleSubmit } = useForm();

  function handleCreateNewOrder(data: any) {}

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
      <Form onSubmit={handleSubmit(handleCreateNewOrder)}>
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
          <input type='text' placeholder='Opcional' {...register("adjunct")} />
        </div>
        <div>
          <input type='text' placeholder='Bairro' {...register("district")} />
          <input type='text' placeholder='Cidade' {...register("city")} />
          <input type='text' placeholder='UF' {...register("state")} />
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
