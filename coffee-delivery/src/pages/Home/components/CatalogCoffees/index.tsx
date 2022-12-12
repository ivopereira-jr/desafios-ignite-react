import { coffees } from '../../../../mocks/coffees';
import { CoffeeCard } from '../CoffeeCard';

import * as S from './styles';

type Coffee = {
  id: string;
  tags: string[];
  name: string;
  description: string;
  image: string;
  price: number;
};

export interface CoffeesProps {
  coffee: Coffee;
}

export function CatalogCoffees() {
  return (
    <S.CatalogCoffeesContainer className='container'>
      <S.TitleCatalogCoffees>
        <h2>Nossos cafés</h2>

        <S.TagsCoffeesContainer>
          <S.TagCoffees>tradicional</S.TagCoffees>
          <S.TagCoffees>especial</S.TagCoffees>
          <S.TagCoffees>com leite</S.TagCoffees>
          <S.TagCoffees>alcoólico</S.TagCoffees>
          <S.TagCoffees>gelado</S.TagCoffees>
        </S.TagsCoffeesContainer>
      </S.TitleCatalogCoffees>

      <S.CoffeesList>
        {coffees.map((coffee: Coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </S.CoffeesList>
    </S.CatalogCoffeesContainer>
  );
}
