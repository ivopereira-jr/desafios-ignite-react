import { ReactNode } from 'react';

import * as S from './styles';

interface SectionTitleProps {
  bgColor: string;
  icon: ReactNode;
  title: string;
  subTitle: string;
}

export function SectionTitle({
  bgColor,
  icon,
  title,
  subTitle
}: SectionTitleProps) {
  return (
    <S.SectionTitleContainer>
      <S.SectionTitleIcon bgColor={bgColor}>{icon}</S.SectionTitleIcon>
      <S.SectionTitleContent>
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </S.SectionTitleContent>
    </S.SectionTitleContainer>
  );
}
