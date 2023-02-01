import { useFormContext } from 'react-hook-form';
import { useCart } from '../../../../hooks/UseCart';

import { CoffeeCardInCart } from '../CoffeeCardInCart';
import { CartItem } from '../../../../contexts/CartContext';
import { formatPrice } from '../../../../utils/formatPrice';

import * as S from './styles';

interface CartProps {
  onLoading: boolean;
}

export function Cart({ onLoading }: CartProps) {
  const { cartItems } = useCart();
  const { formState } = useFormContext();

  const productsCostTotal = cartItems?.reduce(
    (total, product) => total + product.amount * product.price,
    0
  );

  const transportCost = 3.5;
  const costTotal = transportCost + productsCostTotal;

  const transportCostFormatted = formatPrice(transportCost);
  const productsCostTotalFormatted = formatPrice(productsCostTotal);
  const costTotalFormatted = formatPrice(costTotal);

  return (
    <S.CartContainer>
      <S.CoffeesInCart>
        {cartItems.map((coffee: CartItem) => (
          <CoffeeCardInCart key={coffee.id} coffee={coffee} />
        ))}
      </S.CoffeesInCart>

      <S.CartTotalValues>
        <S.CartBoxValue>
          <p>Total de itens</p>
          <span>{productsCostTotalFormatted}</span>
        </S.CartBoxValue>
        <S.CartBoxValue>
          <p>Entrega</p>
          <span>{transportCostFormatted}</span>
        </S.CartBoxValue>
        <S.CartBoxTotalValue>
          <p>Total</p>
          <span>{costTotalFormatted}</span>
        </S.CartBoxTotalValue>

        <S.ButtonConfirmOrder
          form='formCheckoutOrderInfos'
          type='submit'
          disabled={onLoading || !formState?.isValid}
        >
          {onLoading ? <S.ButtonSpinner /> : 'confirmar pedido'}
        </S.ButtonConfirmOrder>
      </S.CartTotalValues>
    </S.CartContainer>
  );
}
