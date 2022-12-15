import { useState } from 'react';
import { Trash } from 'phosphor-react';

import { ActionsToCoffeeCard } from '../../../../components/ActionsToCoffeeCard';
import { CoffeesProps } from '../../../Home/components/CatalogCoffees';

import * as S from './styles';

export function CoffeeCardInCart({ coffee }: CoffeesProps) {
  const [amount, setAmount] = useState(1);

  function handleDecrease() {
    setAmount(state => state - 1);
  }

  function handleIncrease() {
    setAmount(state => state + 1);
  }

  function handleRemoveToCart() {
    console.log('ok');
  }

  return (
    <S.CoffeeCardContainer>
      <img
        src={`/coffeesImage/arabe.png`}
        alt={`xicara de cafe em cima de um pratinho com cafe ${coffee.name}`}
      />

      <S.CoffeeCardContent>
        <h2>{coffee.name}</h2>

        <ActionsToCoffeeCard
          onHandleDecrease={handleDecrease}
          onHandleIncrease={handleIncrease}
          amount={amount}
          size='small'
        >
          <S.RemoveCoffeeToCart onClick={handleRemoveToCart}>
            <Trash size={18} />
            <span>remover</span>
          </S.RemoveCoffeeToCart>
        </ActionsToCoffeeCard>
      </S.CoffeeCardContent>

      <S.CoffeePrice>
        R$ <strong>9,90</strong>
      </S.CoffeePrice>
    </S.CoffeeCardContainer>
  );
}
