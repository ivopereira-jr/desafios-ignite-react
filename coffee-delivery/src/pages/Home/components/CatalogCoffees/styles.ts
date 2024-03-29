import styled from 'styled-components';

export const CatalogCoffeesContainer = styled.section``;

export const CatalogCoffesWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2rem;
  padding-bottom: 7.5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 580px) {
    margin-top: 3rem;
  }
`;

export const TitleCatalogCoffees = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.625rem;
    font-family: 'Baloo 2';
  }
`;

export const BaseTag = styled.span`
  border-radius: 100px;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 0.8125rem;
  text-transform: uppercase;
`;

export const TagsCoffeesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 580px) {
    display: none;
  }
`;

export const TagCoffees = styled(BaseTag)`
  color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  padding: 0.375rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors['brand-yellow']};
`;

export const CoffeesList = styled.div`
  width: 100%;
  height: auto;
  padding: 0 1.5rem;
  margin-top: 5rem;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 2rem;
  row-gap: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors['brand-yellow-catalog']};
    border-radius: 50px;
    transform: skewY(-3deg);
    z-index: -1;
  }

  @media (max-width: 580px) {
    margin-top: 4rem;
  }
`;
