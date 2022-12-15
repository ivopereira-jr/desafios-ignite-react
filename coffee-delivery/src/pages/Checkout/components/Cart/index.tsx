import { coffees } from '../../../../mocks/coffees';

import { CoffeeCardInCart } from '../CoffeeCardInCart';
import { Coffee } from '../../../Home/components/CatalogCoffees';

import * as S from './styles';

export function Cart() {
  return (
    <S.CartContainer>
      <S.CoffeesInCart>
        {coffees.map((coffee: Coffee) => (
          <CoffeeCardInCart key={coffee.id} coffee={coffee} />
        ))}
      </S.CoffeesInCart>

      <S.CartTotalValues>
        <S.CartBoxValue>
          <p>Total de itens</p>
          <span>R$ 29,70</span>
        </S.CartBoxValue>
        <S.CartBoxValue>
          <p>Entrega</p>
          <span>R$ 29,70</span>
        </S.CartBoxValue>
        <S.CartBoxTotalValue>
          <p>Total</p>
          <span>R$ 33,20</span>
        </S.CartBoxTotalValue>

        <S.ButtonConfirmOrder form='formCheckoutOrderInfos' type='submit'>
          confirmar pedido
        </S.ButtonConfirmOrder>
      </S.CartTotalValues>
    </S.CartContainer>
  );
}
