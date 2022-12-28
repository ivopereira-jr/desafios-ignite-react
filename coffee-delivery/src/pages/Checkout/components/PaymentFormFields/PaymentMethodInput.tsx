/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  title: string;
};

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ icon, title, ...props }, ref) => {
  return (
    <S.PaymentMethodContainer>
      <label>
        <input type='radio' name='paymentMethod' {...props} ref={ref} />
        <S.PaymentMethodContent>
          {icon}
          {title}
        </S.PaymentMethodContent>
      </label>
    </S.PaymentMethodContainer>
  );
});
