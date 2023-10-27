import React from 'react';

import Header from '../../../layouts/common/header';
import MarketplaceListContainer from '../../../layouts/marketplace/lists';

import { ContentsContainer, ContentWrapper } from '../../../styles/common';

const MarketplaceList = () => {
  return (
    <ContentsContainer>
      <Header />
      <ContentWrapper>
        <MarketplaceListContainer />
      </ContentWrapper>
    </ContentsContainer>
  );
};

export default React.memo(MarketplaceList);
