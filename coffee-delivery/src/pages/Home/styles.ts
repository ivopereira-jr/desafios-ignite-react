import styled from 'styled-components';

import introBackground from '../../assets/Intro-background.png';

export const HomeContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SectionIntroduction = styled.section`
  width: 100%;
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${introBackground}) center center / cover no-repeat;

  @media (max-width: 1080px) {
    img {
      display: none;
    }
  }
`;

export const IntroductionDescription = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 3.5rem;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.875rem;
    font-family: 'Baloo 2';
    color: ${({ theme }) => theme.colors['base-title']};
  }

  > h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-top: 1rem;
  }

  @media (max-width: 1080px) {
    h1 {
      width: 80%;
    }
  }

  @media (max-width: 580px) {
    margin-right: 0;

    h1 {
      width: 100%;
      font-size: 2.5rem;
    }
  }
`;

export const IntroductionBenefits = styled.div`
  width: 100%;
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;

  @media (max-width: 580px) {
    margin-top: 3rem;
    grid-template-columns: 1fr;
  }
`;
