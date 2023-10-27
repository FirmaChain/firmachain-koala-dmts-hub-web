import React, { useEffect, useRef } from 'react';

import useScrollDetection from '../hooks/useScrollDetection';
import useTheme from '../hooks/useTheme';
import useScreen from '../hooks/useScreen';

import Header from '../layouts/common/header';
import Footer from '../layouts/common/footer';
import SectionTop from '../layouts/home/sectionTop';
import SectionCard from '../layouts/home/sectionCard';
import SectionEvent from '../layouts/home/sectionEvent';
import SectionUpdate from '../layouts/home/sectionUpdate';

import { ContentsContainer, ContentWrapper } from '../styles/common';

const Home = () => {
  const { collapsedNavDesktop } = useScreen();
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
      background: theme.colors.mainBackgroundColor,
      color: '',
      borderColor: theme.colors.textPrimary,
    }
  );

  useEffect(() => collapsedNavDesktop(), [collapsedNavDesktop]);

  return (
    <ContentsContainer ref={scrollRef}>
      <Header background={background} color={color} borderColor={borderColor} />
      <ContentWrapper>
        <SectionTop />
        <SectionCard containerRef={containerRef} />
        <SectionEvent />
        <SectionUpdate />
      </ContentWrapper>
      <Footer />
    </ContentsContainer>
  );
};

export default React.memo(Home);
