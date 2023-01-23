import { NavLink } from 'react-router-dom';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useCart } from '../../hooks/UseCart';
import { useScrollDirection } from '../../hooks/useScrollDirection';

import coffeelogotipo from '../../assets/logotipo.svg';

import * as S from './styles';

export function Header() {
  const { amountProductsInCart } = useCart();
  const scrollDirection = useScrollDirection();

  return (
    <S.HeaderContainer
      className={`${scrollDirection === 'down' && 'headerHide'}`}
    >
      <S.HeaderWrapper className='container'>
        <NavLink to='/'>
          <img
            src={coffeelogotipo}
            alt='um copo de cade estilo americano e ao lado escrito coffee delivery'
          />
        </NavLink>

        <S.HeaderButtonsContainer>
          <S.HeaderButtonLocation variant='purple'>
            <MapPin size={20} weight='fill' />
            Porto Alegre, RS
          </S.HeaderButtonLocation>

          <NavLink to='/checkout'>
            <S.HeaderButtonCart variant='yellow'>
              <ShoppingCart size={20} weight='fill' />
              {amountProductsInCart > 0 && <span>{amountProductsInCart}</span>}
            </S.HeaderButtonCart>
          </NavLink>
        </S.HeaderButtonsContainer>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}
