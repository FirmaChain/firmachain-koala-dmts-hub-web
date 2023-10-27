import React, { useEffect } from 'react';

import Header from '../layouts/common/header';
import Footer from '../layouts/common/footer';
import GovernanceContainer from '../layouts/governance';

import useScreen from '../hooks/useScreen';

import { ContentsContainer, ContentWrapper } from '../styles/common';

const Governance = () => {
  const { expandedNavDesktop } = useScreen();

  useEffect(() => expandedNavDesktop(), [expandedNavDesktop]);

  return (
    <ContentsContainer>
      <Header />
      <ContentWrapper>
        <GovernanceContainer />
      </ContentWrapper>
      <Footer />
    </ContentsContainer>
  );
};

export default React.memo(Governance);
