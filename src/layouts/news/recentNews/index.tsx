import React from 'react';

import useTheme from '../../../hooks/useTheme';

import {
  CardContainer,
  CardHeader,
  CardLabel,
  UpdateIcon,
  HeaderTypo,
  CardDivider,
  CardBody,
  // ExternalLinkIcon,
  NewsList,
  NewsItem,
  NewsImage,
  NewsDescriptionWrapper,
  NewsDescriptionTypo,
  NewsDescriptionTitleTypo,
} from './styles';

const RecentNews = () => {
  const { theme } = useTheme();

  return (
    <CardContainer>
      <CardHeader>
        <CardLabel>
          <UpdateIcon src={theme.urls.updateIcon} />
        </CardLabel>
        <CardDivider />
        <HeaderTypo>RECENT NEWS</HeaderTypo>
        {/* <ExternalLinkIcon src={theme.urls.externalLinkArrow} /> */}
      </CardHeader>
      <CardBody>
        <NewsList>
          <NewsItem>
            <NewsImage $src={theme.urls.dummyNewsBanner6} />
            <NewsDescriptionWrapper>
              <NewsDescriptionTitleTypo>
                Grand Opening: The Blockchain Game Hub Platform is Here!
              </NewsDescriptionTitleTypo>
              <NewsDescriptionTypo>
                We are thrilled to announce the grand opening of the Blockchain Game Hub Platform, a hub of excitement
                and innovation in the world of blockchain gaming! This platform integrates a variety of games based on
                blockchain technology, offering players a revolutionary gaming experience. With the security and
                ownership benefits of blockchain and the transparency of player-to-player transactions, we invite you to
                explore a more thrilling gaming universe! Dive...
              </NewsDescriptionTypo>
            </NewsDescriptionWrapper>
          </NewsItem>

          <NewsItem>
            <NewsImage $src={theme.urls.dummyNewsBanner7} />
            <NewsDescriptionWrapper>
              <NewsDescriptionTitleTypo>Join the Excitement at DMTS 2023 Event!</NewsDescriptionTitleTypo>
              <NewsDescriptionTypo>
                Get ready to embark on an exhilarating gaming journey with our DMTS 2023 event! This special event
                promises new game content and exciting rewards for all participants. Over the upcoming weeks, immerse
                yourself in adventures alongside DMTS and explore new dimensions of gaming. The DMTS event is your
                gateway to thrilling challenges, epic battles, and exclusive in-game treasures. Join forces with fellow
                gamers, and let the games begin!
              </NewsDescriptionTypo>
            </NewsDescriptionWrapper>
          </NewsItem>

          <NewsItem>
            <NewsImage $src={theme.urls.dummyNewsBanner8} />
            <NewsDescriptionWrapper>
              <NewsDescriptionTitleTypo>Season 1 Event Now in Full Swing!</NewsDescriptionTitleTypo>
              <NewsDescriptionTypo>
                Our first-ever Season 1 event is in full swing! Season 1 brings you special quests, treasure hunts,
                competitions, and new characters, all accompanied by a variety of rewards. This season is your chance to
                dive deeper into the world of blockchain gaming, take your first steps towards victory, and claim your
                share of the spoils. As the gaming community buzzes with excitement, seize the moment and become a
                legend in the blockchain gaming universe. Season 1 is your canvas; paint your gaming journey with
                unforgettable moments and glorious achievements!
              </NewsDescriptionTypo>
            </NewsDescriptionWrapper>
          </NewsItem>
        </NewsList>
      </CardBody>
    </CardContainer>
  );
};

export default React.memo(RecentNews);
