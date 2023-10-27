import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import useScreen from '../../hooks/useScreen';

import Header from '../../layouts/common/header';
import Profile from '../../layouts/account/profile';

import { ContentsContainer, ContentWrapper } from '../../styles/common';
import { AccountContainer } from '../../styles/accounts';

const AccountLayout = () => {
  const { collapsedNavDesktop } = useScreen();

  useEffect(() => collapsedNavDesktop(), [collapsedNavDesktop]);

  return (
    <ContentsContainer>
      <Header />
      <ContentWrapper>
        <AccountContainer>
          <Profile />
          <Outlet />
        </AccountContainer>
      </ContentWrapper>
    </ContentsContainer>
  );
};

export default React.memo(AccountLayout);
