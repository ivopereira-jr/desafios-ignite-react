import { useFormContext } from 'react-hook-form';
import { CreditCard, Bank, Money } from 'phosphor-react';

import { PaymentMethodInput } from './PaymentMethodInpur';

import * as S from './styles';

export function PaymentFormFields() {
  const { register } = useFormContext();

  const paymentMethodsOptions = {
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

  return (
    <S.PaymentMethodOptionsContainer>
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
    </S.PaymentMethodOptionsContainer>
  );
}
