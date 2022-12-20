import styled from 'styled-components';

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const InfoContent = styled.div`
  > h2 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.312rem;
  }
`;

interface InfoIconProps {
  bgColor: string;
}

export const InfoIcon = styled.span<InfoIconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors['base-white']};
  background: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
