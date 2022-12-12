import styled from 'styled-components';

export const BenefitsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.312rem;
  }
`;

interface BenefitsIconProps {
  bgColor: string;
}

export const BenefitsIcon = styled.span<BenefitsIconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors['base-white']};
  background: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
