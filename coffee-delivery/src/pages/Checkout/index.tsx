import { useState } from 'react';
import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { BsCartX } from 'react-icons/bs';
import { useNavigate, NavLink } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCart } from '../../hooks/UseCart';

import { Cart } from './components/Cart';
import { SectionTitle } from './components/SectionTitle';
import { AddressFormFields } from './components/AddressFormFields';
import { PaymentFormFields } from './components/PaymentFormFields';

import * as S from './styles';
import { useTheme } from 'styled-components';

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money'
}

const newOrderFormValidationSchema = zod.object({
  zipCode: zod.string().min(1, 'Informe o CEP'),
  address: zod.string().min(1, 'Informe a Rua'),
  addressNumber: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Escolha a forma de pagamento' };
    }
  })
});

export type OrderData = zod.infer<typeof newOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function Checkout() {
  const [loading, setLoading] = useState(false);
  const { cartItems, cleanCart } = useCart();
  const { colors } = useTheme();
  const navigate = useNavigate();

  const newOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      zipCode: '',
      address: '',
      addressNumber: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
      paymentMethod: undefined
    }
  });

  const { handleSubmit } = newOrderForm;

  function handleCreateNewCycle(data: ConfirmOrderFormData) {
    setLoading(true);

    if (data) {
      setTimeout(() => {
        setLoading(false);
        navigate('/confirmed-order', {
          state: data
        });
        cleanCart();
      }, 3000);
    }
  }

  return (
    <div className='container'>
      {cartItems.length != 0 ? (
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

            <Cart onLoading={loading} />
          </S.CoffeesSelected>
        </S.CheckoutContainer>
      ) : (
        <S.CartEmpty>
          <BsCartX size={32} />
          <h2>O seu carrinho está vazio</h2>
          <p>
            Não sabe o que comprar? Temos algumas opções de cafés para você!.
          </p>
          <NavLink to='/'>
            <S.ComeBackHomeButton type='button'>
              Conferir cafés
            </S.ComeBackHomeButton>
          </NavLink>
        </S.CartEmpty>
      )}
    </div>
  );
}
