import styled, { keyframes } from 'styled-components';
import { BaseCard } from '../../styles';

export const CartContainer = styled(BaseCard)`
  width: 100%;
  height: auto;
  max-height: 31.25rem;
  margin-top: 0.9375rem;
  padding: 0;
  border-radius: 6px 44px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CoffeesInCart = styled.div`
  height: auto;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
`;

export const CartTotalValues = styled.footer`
  width: 100%;
  height: auto;
  padding: 1.5rem 2.5rem 2.5rem 2.5rem;
  position: sticky;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors['base-card']};
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
  height: 2.875rem;
  padding: 0.75rem 0.5rem;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors['base-white']};
  background-color: ${({ theme }) => theme.colors['brand-yellow']};
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.375rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 400ms ease;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`;

const spinAnimation = keyframes`
  0% { 
    transform: rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg); 
  }
`;

export const ButtonSpinner = styled.span`
  display: flex;
  border-top: 4px solid ${({ theme }) => theme.colors['base-white']};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spinAnimation} 1s linear infinite;
`;
