import React, { useRef } from 'react';

import Header from '../../layouts/common/header';
import Footer from '../../layouts/common/footer';
import LeaderboardTop from '../../layouts/leaderboard/top';
import LeaderboardNft from '../../layouts/leaderboard/nft';
import LeaderboardToken from '../../layouts/leaderboard/token';

import useScrollDetection from '../../hooks/useScrollDetection';
import useTheme from '../../hooks/useTheme';

import { ContentsContainer, ContentWrapper } from '../../styles/common';
import { LeaderboardContainer } from '../../styles/leaderboard';

const Leaderboard = () => {
  const { theme } = useTheme();

  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  const { background, borderColor } = useScrollDetection(
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
      background: theme.colors.headerLeaderboardBg,
      color: '',
      borderColor: theme.colors.headerEventBg,
    }
  );

  return (
    <ContentsContainer ref={scrollRef}>
      <Header background={background} borderColor={borderColor} />
      <ContentWrapper>
        <LeaderboardContainer>
          <LeaderboardTop />
          <LeaderboardNft />
          <LeaderboardToken />
        </LeaderboardContainer>
      </ContentWrapper>
      <Footer />
    </ContentsContainer>
  );
};

export default React.memo(Leaderboard);
