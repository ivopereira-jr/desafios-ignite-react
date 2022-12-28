import styled, { css } from 'styled-components';

export const AddressContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .zipCode {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .address {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;

    .zipCode {
      max-width: 100%;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .inputUf {
    max-width: 3.75rem;

    @media (max-width: 1080px) {
      max-width: 100%;
    }
  }
`;

export const TextError = styled.p`
  margin-top: 0.375rem;
  margin-left: 0.125rem;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: ${({ theme }) => theme.colors['base-error']};
`;

export const InputContainer = styled.div`
  height: 2.625rem;
  display: flex;
  align-items: center;
  position: relative;

  .inputComplement {
    padding-right: 4.375rem;
  }

  > span {
    position: absolute;
    right: 12px;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    line-height: 1rem;
    color: ${({ theme }) => theme.colors['base-label']};
  }
`;

interface InputStyledProps {
  hasError: boolean;
}

export const InputStyled = styled.input<InputStyledProps>`
  flex: 1;
  max-height: 2.625rem;
  padding: 0.75rem;
  color: ${({ theme }) => theme.colors['base-text']};
  background-color: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.125rem;
  transition: border-color 400ms ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors['base-error']};
    `}
`;
