import React, { useEffect } from 'react';

import useScreen from '../hooks/useScreen';

import Header from '../layouts/common/header';
import Footer from '../layouts/common/footer';
import HotNews from '../layouts/news/hotNews';
import UpdateNews from '../layouts/news/updateNews';
import RecentNews from '../layouts/news/recentNews';

import { ContentsContainer, ContentWrapper } from '../styles/common';
import { NewsContainer, NewsWrapper } from '../styles/news';

const News = () => {
  const { expandedNavDesktop } = useScreen();

  useEffect(() => expandedNavDesktop(), [expandedNavDesktop]);

  return (
    <ContentsContainer>
      <Header />
      <ContentWrapper>
        <NewsContainer>
          <NewsWrapper>
            <HotNews />
            <UpdateNews />
            <RecentNews />
          </NewsWrapper>
        </NewsContainer>
      </ContentWrapper>
      <Footer />
    </ContentsContainer>
  );
};

export default React.memo(News);
