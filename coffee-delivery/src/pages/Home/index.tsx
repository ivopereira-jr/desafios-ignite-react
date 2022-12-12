import { ReactNode } from 'react';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import { Benefits } from './components/Benefits';
import { CatalogCoffees } from './components/CatalogCoffees';

import introCoffeeBanner from '../../assets/intro-coffee-banner.svg';
import * as S from './styles';
import { useTheme } from 'styled-components';

export interface BenefitsProps {
  id?: string;
  bgColor: string;
  icon: ReactNode;
  description: string;
}

export function Home() {
  const { colors } = useTheme();

  const benefitsContent: BenefitsProps[] = [
    {
      id: crypto.randomUUID(),
      bgColor: colors['brand-yellow-dark'],
      description: 'Compra simples e segura',
      icon: <ShoppingCart weight='fill' />
    },
    {
      id: crypto.randomUUID(),
      bgColor: colors['base-text'],
      description: 'Embalagem mantém o café intacto',
      icon: <Package weight='fill' />
    },
    {
      id: crypto.randomUUID(),
      bgColor: colors['brand-yellow'],
      description: 'Entrega rápida e rastreada',
      icon: <Timer weight='fill' />
    },
    {
      id: crypto.randomUUID(),
      bgColor: colors['brand-purple'],
      description: 'O café chega fresquinho até você',
      icon: <Coffee weight='fill' />
    }
  ];

  return (
    <S.HomeContainer>
      <S.SectionIntroduction>
        <div className='container flexAlignCenter'>
          <S.IntroductionDescription>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>

            <S.IntroductionBenefits>
              {benefitsContent.map(benefit => (
                <Benefits
                  key={benefit.id}
                  bgColor={benefit.bgColor}
                  icon={benefit.icon}
                  description={benefit.description}
                />
              ))}
            </S.IntroductionBenefits>
          </S.IntroductionDescription>

          <img
            src={introCoffeeBanner}
            alt='copo de cafe estilo americano com tampa ao lado de algumas sementes de cafe espalhadas'
          />
        </div>
      </S.SectionIntroduction>

      <CatalogCoffees />
    </S.HomeContainer>
  );
}
