import { ReactNode } from 'react';

import * as S from './styles';

export interface InfoWithIconProps {
  id?: string;
  bgColor: string;
  icon: ReactNode;
  title: string;
  description?: string;
}

export function InfoWithIcon({
  bgColor,
  icon,
  title,
  description
}: InfoWithIconProps) {
  return (
    <S.InfoWithIconContainer>
      <S.InfoIcon bgColor={bgColor}>{icon}</S.InfoIcon>
      <S.InfoContent>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </S.InfoContent>
    </S.InfoWithIconContainer>
  );
}
