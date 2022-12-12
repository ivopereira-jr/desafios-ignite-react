import styled from 'styled-components';
import { darken } from 'polished';

import { BaseTag } from '../CatalogCoffees/styles';

export const CoffeeCard = styled.div`
  min-width: 256px;
  height: auto;
  max-height: 19.875rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -1.25rem;
  }
`;

export const CoffeeContent = styled.div`
  padding: 0 1.25rem 1.25rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-weight: 700;
    font-family: 'Baloo 2';
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors['base-label']};
  }
`;

export const TagsCoffeeCard = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const TagCoffeeCard = styled(BaseTag)`
  color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  background-color: ${({ theme }) => theme.colors['brand-yellow-light']};
  padding: 0.25rem 0.5rem;
`;

export const CoffeeCardFooter = styled.footer`
  width: 100%;
  margin-top: 2.0625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span strong {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.937rem;
    font-family: 'Baloo 2';
    color: ${({ theme }) => theme.colors['base-text']};
  }
`;

export const ActionsToCart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AmountInputContainer = styled.div`
  width: 5.625rem;
  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-button']};
  display: flex;
  align-items: center;
  gap: 0.25rem;

  input {
    width: 100%;
    border: none;
    background: none;
    outline: none;
    text-align: center;
    color: ${({ theme }) => theme.colors['base-title']};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;

export const IconContainer = styled.button`
  color: ${({ theme }) => theme.colors['brand-purple']};
  background-color: transparent;
`;

export const AddCoffeeToCart = styled.button`
  height: 2.375rem;
  border-radius: 6px;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors['base-card']};
  background-color: ${({ theme }) => theme.colors['brand-purple-dark']};
  transition: background-color 400ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors['brand-purple']};
  }
`;
