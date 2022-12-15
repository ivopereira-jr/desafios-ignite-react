import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { SectionTitle } from './components/SectionTitle';
import { AddressFormFields } from './components/AddressFormFields';
import { PaymentFormFields } from './components/PaymentFormFields';

import * as S from './styles';
import { useTheme } from 'styled-components';
import { Cart } from './components/Cart';

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money'
}

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' };
    }
  })
});

export type OrderData = zod.infer<typeof newOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function Checkout() {
  const { colors } = useTheme();

  const newOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: ''
    }
  });

  const { handleSubmit } = newOrderForm;

  function handleCreateNewCycle(data: ConfirmOrderFormData) {
    console.log(data);
  }

  return (
    <div className='container'>
      <S.CheckoutContainer>
        <S.CheckoutFormContainer>
          <S.ContainerTitle>Complete seu pedido</S.ContainerTitle>

          <form
            id='formCheckoutOrderInfos'
            onSubmit={handleSubmit(handleCreateNewCycle)}
          >
            <FormProvider {...newOrderForm}>
              <S.AddressToDelivery>
                <SectionTitle
                  bgColor={colors['brand-yellow-dark']}
                  icon={<MapPinLine size={22} />}
                  title='Endereço de Entrega'
                  subTitle='Informe o endereço onde deseja receber seu pedido'
                />

                <AddressFormFields />
              </S.AddressToDelivery>

              <S.Payment>
                <SectionTitle
                  bgColor={colors['brand-purple']}
                  icon={<CurrencyDollar size={22} />}
                  title='Pagamento'
                  subTitle='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
                />

                <PaymentFormFields />
              </S.Payment>
            </FormProvider>
          </form>
        </S.CheckoutFormContainer>

        <S.CoffeesSelected>
          <S.ContainerTitle>Cafés selecionados</S.ContainerTitle>

          <Cart />
        </S.CoffeesSelected>
      </S.CheckoutContainer>
    </div>
  );
}
