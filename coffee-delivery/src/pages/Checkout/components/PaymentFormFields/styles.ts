import styled from 'styled-components';

export const PaymentMethodOptionsContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const PaymentMethodContainer = styled.div`
  width: 100%;

  input[type='radio'] {
    visibility: hidden;
    appearance: none;
  }

  input[type='radio']:checked + div {
    background-color: ${({ theme }) => theme.colors['brand-purple-light']};
    border-color: ${({ theme }) => theme.colors['brand-purple']};

    &:hover {
      background-color: ${({ theme }) => theme.colors['brand-purple-light']};
    }
  }
`;

export const PaymentMethodContent = styled.div`
  width: 100%;
  height: 3.1875rem;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors['base-button']};
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.1875rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  user-select: none;
  transition: background-color 400ms ease;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }
`;
