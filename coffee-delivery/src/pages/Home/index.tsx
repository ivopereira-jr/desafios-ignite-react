import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import { CatalogCoffees } from './components/CatalogCoffees';
import { InfoWithIcon, InfoWithIconProps } from '../../components/InfoWithIcon';

import introCoffeeBanner from '../../assets/intro-coffee-banner.svg';
import * as S from './styles';
import { useTheme } from 'styled-components';

export function Home() {
  const { colors } = useTheme();

  const benefitsContent: InfoWithIconProps[] = [
    {
      id: crypto.randomUUID(),
      bgColor: colors['brand-yellow-dark'],
      title: <h2>Compra simples e segura</h2>,
      icon: <ShoppingCart weight='fill' />
    },
    {
      id: crypto.randomUUID(),
      bgColor: colors['base-text'],
      title: <h2>Embalagem mantém o café intacto</h2>,
      icon: <Package weight='fill' />
    },
    {
      id: crypto.randomUUID(),
      bgColor: colors['brand-yellow'],
      title: <h2>Entrega rápida e rastreada</h2>,
      icon: <Timer weight='fill' />
    },
    {
      id: crypto.randomUUID(),
      bgColor: colors['brand-purple'],
      title: <h2>O café chega fresquinho até você</h2>,
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
                <InfoWithIcon
                  key={benefit.id}
                  bgColor={benefit.bgColor}
                  icon={benefit.icon}
                  title={benefit.title}
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
