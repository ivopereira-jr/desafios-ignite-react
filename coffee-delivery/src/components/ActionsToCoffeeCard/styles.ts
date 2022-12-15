import styled, { css } from 'styled-components';

interface ActionsToCartProps {
  size: 'small' | 'medium';
}

export const ActionsToCart = styled.div<ActionsToCartProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${({ size }) =>
    size === 'small'
      ? css`
          height: 2rem;
        `
      : css`
          height: 2.375rem;
        `}
`;

export const AmountInputContainer = styled.div`
  width: 5.625rem;
  height: 100%;
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
    text-align: center;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`;

export const IconContainer = styled.button`
  color: ${({ theme }) => theme.colors['brand-purple']};
  background-color: transparent;
`;
