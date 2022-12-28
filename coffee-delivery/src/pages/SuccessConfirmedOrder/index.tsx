import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';

import { InfoWithIcon, InfoWithIconProps } from '../../components/InfoWithIcon';
import { paymentMethodsOptions } from '../Checkout/components/PaymentFormFields';
import { OrderData } from '../Checkout';

import ImageDeliveryOrderIllustration from '../../assets/finished-order.svg';
import * as S from './styles';
import { useTheme } from 'styled-components';

interface LocationType {
  state: OrderData;
}

export function SuccessConfirmedOrder() {
  const { colors } = useTheme();
  const { state } = useLocation() as unknown as LocationType;
  const navigate = useNavigate();

  const DeliveryOrderInfo: InfoWithIconProps[] = [
    {
      id: crypto.randomUUID(),
      bgColor: colors['brand-purple'],
      title: (
        <h2>
          Entrega em{' '}
          <strong>
            {state.address}, {state.addressNumber}
          </strong>
        </h2>
      ),
      description: (
        <p>
          {state.district} - {state.city}, {state.uf}
        </p>
      ),
      icon: <MapPin weight='fill' />
    },
    {
      id: crypto.randomUUID(),
      bgColor: colors['brand-yellow'],
      title: <h2>Previsão de entrega</h2>,
      description: <p>20 min - 30 min</p>,
      icon: <Clock weight='fill' />
    },
    {
      id: crypto.randomUUID(),
      bgColor: colors['brand-yellow-dark'],
      title: <h2>Pagamento na entrega</h2>,
      description: <p>{paymentMethodsOptions[state.paymentMethod].title}</p>,
      icon: <CurrencyDollar weight='fill' />
    }
  ];

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, []);

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
