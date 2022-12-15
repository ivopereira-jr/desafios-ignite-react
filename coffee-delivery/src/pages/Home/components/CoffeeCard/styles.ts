import styled from 'styled-components';

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

export const BaseButtonCoffeeCard = styled.button`
  height: 100%;
  border-radius: 6px;
  padding: 0.5rem;
  transition: background-color 400ms ease;
`;

export const AddCoffeeToCart = styled(BaseButtonCoffeeCard)`
  color: ${({ theme }) => theme.colors['base-card']};
  background-color: ${({ theme }) => theme.colors['brand-purple-dark']};

  &:hover {
    background-color: ${({ theme }) => theme.colors['brand-purple']};
  }
`;
