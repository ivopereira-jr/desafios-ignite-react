import { useFormContext } from 'react-hook-form';
import { CreditCard, Bank, Money } from 'phosphor-react';

import { PaymentMethodInput } from './PaymentMethodInput';
import { ErrorsType } from '../AddressFormFields';

import * as S from './styles';

export const paymentMethodsOptions = {
  credit: {
    icon: <CreditCard size={16} />,
    title: 'Cartão de crédito'
  },
  debit: {
    icon: <Bank size={16} />,
    title: 'Cartão de débito'
  },
  money: {
    icon: <Money size={16} />,
    title: 'Dinheiro'
  }
};

export function PaymentFormFields() {
  const { register, formState } = useFormContext();
  const { errors } = formState as unknown as ErrorsType;

  return (
    <S.PaymentMethodOptionsContainer>
      <S.PaymentMethodOptions>
        {Object.entries(paymentMethodsOptions).map(([key, { title, icon }]) => (
          <PaymentMethodInput
            key={title}
            id={key}
            icon={icon}
            title={title}
            value={key}
            {...register('paymentMethod')}
          />
        ))}
      </S.PaymentMethodOptions>

      {errors.paymentMethod && (
        <S.PaymentTextError>{errors.paymentMethod?.message}</S.PaymentTextError>
      )}
    </S.PaymentMethodOptionsContainer>
  );
}
