import React, { useRef } from 'react';

import Header from '../../layouts/common/header';
import Footer from '../../layouts/common/footer';
import MarketplaceContainer from '../../layouts/marketplace';

import useScrollDetection from '../../hooks/useScrollDetection';
import useTheme from '../../hooks/useTheme';

import { ContentsContainer, ContentWrapper } from '../../styles/common';

const Marketplace = () => {
  const { theme } = useTheme();

  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  const { background, color, borderColor } = useScrollDetection(
    scrollRef,
    [
      {
        ref: containerRef,
        background: theme.colors.headerDefaultBg,
        color: '',
        borderColor: theme.colors.headerDefaultBorder,
      },
    ],
    {
      background: theme.colors.headerEventBg,
      color: theme.colors.white,
      borderColor: theme.colors.headerEventBg,
    }
  );

  return (
    <ContentsContainer ref={scrollRef}>
      <Header background={background} color={color} borderColor={borderColor} />
      <ContentWrapper>
        <MarketplaceContainer containerRef={containerRef} />
      </ContentWrapper>
      <Footer />
    </ContentsContainer>
  );
};

export default React.memo(Marketplace);
