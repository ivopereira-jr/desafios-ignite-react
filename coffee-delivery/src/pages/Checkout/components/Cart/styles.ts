import styled from 'styled-components';
import { BaseCard } from '../../styles';

export const CartContainer = styled.div`
  position: relative;
`;

export const CoffeesInCart = styled(BaseCard)`
  width: 100%;
  height: auto;
  max-height: 31.25rem;
  margin-top: 0.9375rem;
  display: flex;
  flex-direction: column;
  border-radius: 6px 44px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CartTotalValues = styled.footer`
  width: 100%;
  height: auto;
  padding: 1.5rem 2.5rem 2.5rem 2.5rem;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 0 0 6px 44px;
`;

const BaseCartBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CartBoxValue = styled(BaseCartBox)`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3125rem;

  & + div {
    margin-top: 0.75rem;
  }
`;

export const CartBoxTotalValue = styled(BaseCartBox)`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.625rem;
  color: ${({ theme }) => theme.colors['base-subtitle']};
`;

export const ButtonConfirmOrder = styled.button`
  width: 100%;
  padding: 0.75rem 0.5rem;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors['base-white']};
  background-color: ${({ theme }) => theme.colors['brand-yellow']};
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.375rem;
  text-transform: uppercase;
  transition: background-color 400ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`;
