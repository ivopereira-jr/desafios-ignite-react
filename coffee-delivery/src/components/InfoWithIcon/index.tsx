import { ReactNode } from 'react';

import * as S from './styles';

export interface InfoWithIconProps {
  id?: string;
  bgColor: string;
  icon: ReactNode;
  title: ReactNode;
  description?: string | ReactNode;
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
        {title}
        {description && description}
      </S.InfoContent>
    </S.InfoWithIconContainer>
  );
}
