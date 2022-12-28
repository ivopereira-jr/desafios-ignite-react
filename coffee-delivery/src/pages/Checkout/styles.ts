import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 5rem;
  margin-top: 2.5rem;
  display: flex;
  gap: 2rem;
`;

export const ContainerTitle = styled.h2`
  font-size: 1.125rem;
  line-height: 1.4375rem;
  font-family: 'Baloo 2';
  font-weight: 700;
  color: ${({ theme }) => theme.colors['base-subtitle']};
`;

export const CheckoutFormContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  form {
    margin-top: 0.9375rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const BaseCard = styled.div`
  width: 100%;
  height: auto;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
`;

export const AddressToDelivery = styled(BaseCard)``;

export const Payment = styled(BaseCard)``;

export const CoffeesSelected = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const CartEmpty = styled.div`
  display: grid;
  place-items: center;
  margin-top: 6.25rem;

  > h2 {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    line-height: 42px;
  }

  > p {
    font-size: 1.125rem;
  }
`;

export const ComeBackHomeButton = styled.button`
  width: auto;
  padding: 1rem 1.5rem;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors['base-white']};
  background-color: ${({ theme }) => theme.colors['brand-yellow']};
  border-radius: 6px;
  font-weight: 700;
  transition: background-color 400ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`;
