import React from 'react';

import useTheme from '../../../hooks/useTheme';

import {
  Background,
  Background1,
  Background2,
  Background3,
  Background4,
  BorderLine,
  LeaderboardTopCaontainer,
  LeaderboardTopWrapper,
  SectionDescription,
  SectionTitleTypo,
  TopCard,
  TopCardTitleTypo,
  TopCardValueTypo,
  TopCardWrapper,
  TopSection,
} from './styles';

const LeaderboardTop = () => {
  const { theme } = useTheme();

  return (
    <LeaderboardTopCaontainer>
      <Background />
      <LeaderboardTopWrapper>
        <Background1 />
        <Background2 />
        <Background3 />
        <Background4 />

        <TopSection>
          <SectionTitleTypo>LEADERBOARD</SectionTitleTypo>
          <BorderLine src={theme.urls.borderLine} />
          <SectionDescription>
            Explore the Koala Knights leaderboard to see a variety of rankings and statistics! Dive deeper to view
            details like top stakers and NFT counts by wallet.
          </SectionDescription>
        </TopSection>
        <TopCardWrapper>
          <TopCard>
            <TopCardTitleTypo>TOTAL NFT</TopCardTitleTypo>
            <TopCardValueTypo>888,888</TopCardValueTypo>
          </TopCard>

          <TopCard>
            <TopCardTitleTypo>JOIN USER</TopCardTitleTypo>
            <TopCardValueTypo>10,000</TopCardValueTypo>
          </TopCard>

          <TopCard>
            <TopCardTitleTypo>KOA VOLUME</TopCardTitleTypo>
            <TopCardValueTypo>123,456,789</TopCardValueTypo>
          </TopCard>
        </TopCardWrapper>
      </LeaderboardTopWrapper>
    </LeaderboardTopCaontainer>
  );
};

export default React.memo(LeaderboardTop);
