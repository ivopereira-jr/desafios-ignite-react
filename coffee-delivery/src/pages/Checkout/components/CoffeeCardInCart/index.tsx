import { Trash } from 'phosphor-react';
import { useCart } from '../../../../hooks/UseCart';

import { ActionsToCoffeeCard } from '../../../../components/ActionsToCoffeeCard';

import * as S from './styles';
import { CartItem } from '../../../../contexts/CartContext';

interface CoffeeCardInCart {
  coffee: CartItem;
}

export function CoffeeCardInCart({ coffee }: CoffeeCardInCart) {
  const { changeCartItemQuantity, removeCoffeeToCart } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase');
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease');
  }

  function handleRemoveToCart(coffeeId: string) {
    removeCoffeeToCart(coffeeId);
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
          onHandleIncrease={handleIncrease}
          onHandleDecrease={handleDecrease}
          amount={coffee.amount}
          size='small'
        >
          <S.RemoveCoffeeToCart onClick={() => handleRemoveToCart(coffee.id)}>
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
