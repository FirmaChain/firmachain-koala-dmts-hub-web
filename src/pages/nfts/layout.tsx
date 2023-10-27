import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import useScreen from '../../hooks/useScreen';
import useScrollToTop from '../../hooks/useScrollTop';

import Header from '../../layouts/common/header';

import { ContentsContainer, ContentWrapper } from '../../styles/common';

const NftLayout = () => {
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

export default React.memo(NftLayout);
