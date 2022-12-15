import styled from 'styled-components';

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

interface SectionTitleIconProps {
  bgColor: string;
}

export const SectionTitleIcon = styled.span<SectionTitleIconProps>`
  color: ${({ bgColor }) => bgColor};
`;

export const SectionTitleContent = styled.div`
  h2 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3125rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.125rem;
    margin-top: 0.125rem;
  }
`;
