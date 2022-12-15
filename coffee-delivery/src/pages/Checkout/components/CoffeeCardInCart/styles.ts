import styled from 'styled-components';
import { BaseButtonCoffeeCard } from '../../../Home/components/CoffeeCard/styles';

export const CoffeeCardContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  padding: 1.5rem 0;
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
  }
`;

export const CoffeeCardContent = styled.div`
  h2 {
    font-size: 1rem;
    line-height: 1.3125rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 0.5rem;
  }
`;

export const RemoveCoffeeToCart = styled(BaseButtonCoffeeCard)`
  color: ${({ theme }) => theme.colors['base-text']};
  background-color: ${({ theme }) => theme.colors['base-button']};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.1875rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['brand-purple-light']};
  }
`;

export const CoffeePrice = styled.span`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3125rem;
  color: ${({ theme }) => theme.colors['base-text']};
`;
