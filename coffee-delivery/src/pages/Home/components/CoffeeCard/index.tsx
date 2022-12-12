import { useState } from 'react';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';

import { CoffeesProps } from '../CatalogCoffees';

import * as S from './styles';

export function CoffeeCard({ coffee }: CoffeesProps) {
  const [amount, setAmount] = useState(1);

  function handleDecrease() {
    setAmount(state => state - 1);
  }

  function handleIncrease() {
    setAmount(state => state + 1);
  }

  function handleAddToCart() {
    console.log({ ...coffee, amount });
  }

  return (
    <S.CoffeeCard>
      <img
        src={`/coffeesImage/${coffee.image}`}
        alt={`xicara de cafe em cima de um pratinho com cafe ${coffee.name}`}
      />

      <S.CoffeeContent>
        <S.TagsCoffeeCard>
          {coffee.tags.map(tag => (
            <S.TagCoffeeCard key={`${coffee.id}${tag}`}>{tag}</S.TagCoffeeCard>
          ))}
        </S.TagsCoffeeCard>

        <h2>{coffee.name}</h2>
        <p>{coffee.description}</p>

        <S.CoffeeCardFooter>
          <span>
            R$ <strong>9,90</strong>
          </span>

          <S.ActionsToCart>
            <S.AmountInputContainer>
              <S.IconContainer onClick={handleDecrease} disabled={amount <= 1}>
                <Minus size={14} weight='fill' />
              </S.IconContainer>

              <input type='number' value={amount} readOnly />

              <S.IconContainer onClick={handleIncrease}>
                <Plus size={14} weight='fill' />
              </S.IconContainer>
            </S.AmountInputContainer>

            <S.AddCoffeeToCart onClick={handleAddToCart}>
              <ShoppingCart size={22} weight='fill' />
            </S.AddCoffeeToCart>
          </S.ActionsToCart>
        </S.CoffeeCardFooter>
      </S.CoffeeContent>
    </S.CoffeeCard>
  );
}
