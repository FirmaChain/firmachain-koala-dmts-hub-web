import React from 'react';

import Header from '../../../../layouts/common/header';

import { ContentsContainer, ContentWrapper } from '../../../../styles/common';

const EventDetailSub = () => {
  return (
    <ContentsContainer>
      <Header />
      <ContentWrapper></ContentWrapper>
    </ContentsContainer>
  );
};

export default React.memo(EventDetailSub);
