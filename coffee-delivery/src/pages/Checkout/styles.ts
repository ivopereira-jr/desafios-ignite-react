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
