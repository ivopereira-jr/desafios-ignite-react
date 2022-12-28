import styled from 'styled-components';

export const ConfirmedOrderContainer = styled.section`
  margin-top: 5rem;
  padding-bottom: 5rem;

  > h2 {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    line-height: 42px;
  }

  > p {
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const ConfirmedOrderContent = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const DeliveryOrderInfos = styled.div`
  width: 100%;
  max-width: 560px;
  height: 270px;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors['base-background']};
  padding: 2.5rem;
  position: relative;
  display: flex;
  flex-direction: column;

  > div + div {
    margin-top: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: inherit;
    background-image: linear-gradient(120deg, #dbac2c, #8047f8);
  }
`;

export const DeliveryOrderIllustration = styled.div`
  @media (max-width: 960px) {
    display: none;
  }
`;
