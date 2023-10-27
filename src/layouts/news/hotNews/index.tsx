import React from 'react';

import useTheme from '../../../hooks/useTheme';

import {
  HotNewsWrapper,
  NewsTitleTypo,
  UpdateItem,
  UpdateImage,
  UpdateDescription,
  UpdateTitleWrapper,
  UpdateLabel,
  UpdateTitleTypo,
  DescriptionTypo,
} from './styles';

const HotNews = () => {
  const { theme } = useTheme();

  return (
    <HotNewsWrapper>
      <NewsTitleTypo>HOT NEWS</NewsTitleTypo>
      <UpdateItem $special={true}>
        <UpdateImage $src={theme.urls.dummyNewsBanner} />
        <UpdateDescription>
          <UpdateTitleWrapper>
            <UpdateLabel>NEW</UpdateLabel>
            <UpdateTitleTypo>Grand Opening: The Blockchain Game Hub Platform is Here!</UpdateTitleTypo>
          </UpdateTitleWrapper>
          <DescriptionTypo>
            We are thrilled to announce the grand opening of the Blockchain Game Hub Platform, a hub of excitement and
            innovation in the world of blockchain gaming!
            <br />
            <br /> This platform integrates a variety of games based on blockchain technology, offering players a
            revolutionary gaming experience. With the security and ownership benefits of blockchain and the transparency
            of player-to-player transactions, we invite you to explore a more thrilling gaming universe! Dive into a
            world where digital assets are truly yours, and the possibilities are endless. Whether you're a seasoned
            blockchain gamer or new to this exciting world, the Blockchain Game Hub Platform welcomes you to discover,
            play, and thrive!
          </DescriptionTypo>
        </UpdateDescription>
      </UpdateItem>
    </HotNewsWrapper>
  );
};

export default React.memo(HotNews);
