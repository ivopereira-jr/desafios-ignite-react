import { BenefitsProps } from '../..';

import * as S from './styles';

export function Benefits({ bgColor, icon, description }: BenefitsProps) {
  return (
    <S.BenefitsContainer>
      <S.BenefitsIcon bgColor={bgColor}>{icon}</S.BenefitsIcon>
      <p>{description}</p>
    </S.BenefitsContainer>
  );
}
