import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import useScreen from '../../hooks/useScreen';
import useScrollToTop from '../../hooks/useScrollTop';
import useTheme from '../../hooks/useTheme';

import Header from '../../layouts/common/header';

import { ContentWrapper, ContentsContainer } from '../../styles/common';

const WorldLayout = () => {
  const { theme } = useTheme();
  const { collapsedNavDesktop } = useScreen();

  useEffect(() => collapsedNavDesktop(), [collapsedNavDesktop]);

  useScrollToTop();

  return (
    <ContentsContainer>
      <Header background={theme.colors.canvasBg} color={theme.colors.white} borderColor={theme.colors.white} />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </ContentsContainer>
  );
};

export default React.memo(WorldLayout);
