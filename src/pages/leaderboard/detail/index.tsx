import React from 'react';

import Header from '../../../layouts/common/header';
import Footer from '../../../layouts/common/footer';

import { ContentsContainer, ContentWrapper } from '../../../styles/common';

const LeaderboardDetail = () => {
  return (
    <ContentsContainer>
      <Header />
      <ContentWrapper></ContentWrapper>
      <Footer />
    </ContentsContainer>
  );
};

export default React.memo(LeaderboardDetail);
