import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../layouts/common/header';

import useScreen from '../../hooks/useScreen';
import useScrollToTop from '../../hooks/useScrollTop';

import { ContentsContainer, ContentWrapper } from '../../styles/common';

const QuestLayout = () => {
  const { collapsedNavDesktop } = useScreen();

  useEffect(() => collapsedNavDesktop(), [collapsedNavDesktop]);

  useScrollToTop();

  return (
    <ContentsContainer>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </ContentsContainer>
  );
};

export default React.memo(QuestLayout);
