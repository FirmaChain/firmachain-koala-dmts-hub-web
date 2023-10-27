import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import useScreen from '../../hooks/useScreen';
import useScrollToTop from '../../hooks/useScrollTop';

import Header from '../../layouts/common/header';
import Footer from '../../layouts/common/footer';

import { ContentsContainer } from '../../styles/common';
import { ContentWrapper, GameFiContainer } from '../../styles/gameFi';

const GameFiLayout = () => {
  const { expandedNavDesktop } = useScreen();

  useEffect(() => expandedNavDesktop(), [expandedNavDesktop]);

  useScrollToTop();

  return (
    <ContentsContainer>
      <Header />
      <ContentWrapper>
        <GameFiContainer>
          <Outlet />
        </GameFiContainer>
      </ContentWrapper>
      <Footer />
    </ContentsContainer>
  );
};

export default React.memo(GameFiLayout);
