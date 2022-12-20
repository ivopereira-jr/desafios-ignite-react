import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';

import { InfoWithIcon, InfoWithIconProps } from '../../components/InfoWithIcon';

import ImageDeliveryOrderIllustration from '../../assets/finished-order.svg';
import * as S from './styles';
import { useTheme } from 'styled-components';

export function SuccessConfirmedOrder() {
  const { colors } = useTheme();

  const DeliveryOrderInfo: InfoWithIconProps[] = [
    {
      id: crypto.randomUUID(),
      bgColor: colors['brand-purple'],
      title: 'Entrega em',
      description: '',
      icon: <MapPin weight='fill' />
    },
    {
      id: crypto.randomUUID(),
      bgColor: colors['brand-yellow'],
      title: 'Previsão de entrega',
      description: '',
      icon: <Clock weight='fill' />
    },
    {
      id: crypto.randomUUID(),
      bgColor: colors['brand-yellow-dark'],
      title: 'Pagamento na entrega',
      description: '',
      icon: <CurrencyDollar weight='fill' />
    }
  ];

  return (
    <S.ConfirmedOrderContainer className='container'>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <S.ConfirmedOrderContent>
        <S.DeliveryOrderInfos>
          {DeliveryOrderInfo.map(info => (
            <InfoWithIcon
              key={info.id}
              bgColor={info.bgColor}
              icon={info.icon}
              title={info.title}
              description={info.description}
            />
          ))}
        </S.DeliveryOrderInfos>

        <S.DeliveryOrderIllustration>
          <img
            src={ImageDeliveryOrderIllustration}
            alt='Um homem com camiseta amarela e com uma calça verde emcima de um moto com um bau'
          />
        </S.DeliveryOrderIllustration>
      </S.ConfirmedOrderContent>
    </S.ConfirmedOrderContainer>
  );
}
