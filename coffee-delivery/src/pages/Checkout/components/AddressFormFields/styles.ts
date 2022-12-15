import styled from 'styled-components';

export const AddressContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 2.625rem;
  display: flex;
  align-items: center;
  position: relative;

  > input {
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

export const Input = styled.input`
  flex: 1;
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
`;
