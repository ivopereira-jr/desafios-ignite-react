import { Minus, Plus } from 'phosphor-react';
import { ReactNode } from 'react';

import * as S from './styles';

interface ActionsToCoffeeCardProps {
  onHandleDecrease: () => void;
  onHandleIncrease: () => void;
  amount: number;
  children: ReactNode;
  size?: 'small' | 'medium';
}

export function ActionsToCoffeeCard({
  onHandleDecrease,
  onHandleIncrease,
  amount,
  children,
  size = 'medium'
}: ActionsToCoffeeCardProps) {
  return (
    <S.ActionsToCart size={size}>
      <S.AmountInputContainer>
        <S.IconContainer onClick={onHandleDecrease} disabled={amount <= 1}>
          <Minus size={14} weight='fill' />
        </S.IconContainer>

        <input type='number' value={amount} readOnly />

        <S.IconContainer onClick={onHandleIncrease}>
          <Plus size={14} weight='fill' />
        </S.IconContainer>
      </S.AmountInputContainer>

      {children}
    </S.ActionsToCart>
  );
}
