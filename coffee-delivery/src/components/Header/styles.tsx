/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { darken } from 'polished';

const DivFlexAlignCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: rgba(250, 250, 250, 0.88);
  backdrop-filter: blur(8px);
  z-index: 3;
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderButtonsContainer = styled(DivFlexAlignCenter)`
  gap: 0.75rem;
`;

interface HeaderButtonProps {
  variant: 'purple' | 'yellow';
}

const BaseButton = styled.button<HeaderButtonProps>`
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: background-color 400ms ease;
`;

export const HeaderButtonLocation = styled(BaseButton)`
  font-size: 0.875rem;
  font-weight: 400;
  gap: 4px;

  ${({ variant }) => css`
    color: ${({ theme }) => theme.colors[`brand-${variant}-dark`]};
    background-color: ${({ theme }) => theme.colors[`brand-${variant}-light`]};

    &:hover {
      background: ${({ theme }) =>
        darken(0.08, theme.colors[`brand-${variant}-light`])};
    }

    svg {
      color: ${({ theme }) => theme.colors[`brand-${variant}`]};
    }
  `}
`;

export const HeaderButtonCart = styled(BaseButton)`
  position: relative;

  ${({ variant }) => css`
    background: ${({ theme }) => theme.colors[`brand-${variant}-light`]};

    &:hover {
      background: ${({ theme }) =>
        darken(0.08, theme.colors[`brand-${variant}-light`])};
    }

    svg {
      color: ${({ theme }) => theme.colors[`brand-${variant}-dark`]};
    }
  `}

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors['base-white']};
    background-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    font-size: 0.75rem;
    font-weight: 700;
    display: grid;
    place-items: center;
  }
`;
