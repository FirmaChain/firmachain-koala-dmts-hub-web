import React from 'react';

import useTheme from '../../hooks/useTheme';

import RecentNfts from './recent';
import TrendingNfts from './trending';

import {
  BannerInfoContainer,
  BannerInfoDescription,
  BannerInfoDescriptionBottom,
  BannerInfoDescriptionTop,
  BannerInfoDescriptionWrapper,
  BannerInfoLabel,
  BannerInfoTitleChar,
  BannerInfoTitleTypo,
  BannerInfoTitleWrapper,
  BannerInfoWrapper,
  BannerLineContainer,
  BannerLineWrapper,
  Dot,
  LeftIcon,
  MarketplaceContainer,
  MarketplaceWrapper,
  RightIcon,
  SliderControl,
  TopBannerImage,
  TopBannerList,
  TopBannerWrapper,
  TotalList,
  TotalListLabel,
  TotalListValue,
  TypeLabelItem,
  TypeLabelList,
  ViewButton,
} from './styles';

interface IProps {
  containerRef?: any;
}

const Marketplace = ({ containerRef }: IProps) => {
  const { theme } = useTheme();

  const initialImages = [
    theme.urls.marketplaceBannerBg1,
    theme.urls.marketplaceBannerBg2,
    theme.urls.marketplaceBannerBg1,
    theme.urls.marketplaceBannerBg2,
  ];

  return (
    <MarketplaceContainer>
      <TopBannerList>
        <TopBannerWrapper>
          <TopBannerImage $src={initialImages[0]} />
        </TopBannerWrapper>
      </TopBannerList>
      <BannerInfoContainer>
        <BannerInfoWrapper>
          <BannerInfoTitleWrapper>
            <BannerInfoTitleTypo>Nov 2, 2023 ~ Nov 4, 2023</BannerInfoTitleTypo>
            <BannerInfoTitleChar />
          </BannerInfoTitleWrapper>
          <BannerInfoDescriptionWrapper>
            <BannerInfoDescriptionTop>
              <BannerInfoLabel>Pre-Sale</BannerInfoLabel>
              <BannerInfoDescription>
                Exclusive NFT Pre-Sale Event! Collect all 5 unique color variants of our NFTs and you might be in for a
                special treat in the future. Don't miss out on this opportunity!
              </BannerInfoDescription>
            </BannerInfoDescriptionTop>
            <BannerInfoDescriptionBottom>
              <ViewButton>VIEW ITEM</ViewButton>
            </BannerInfoDescriptionBottom>
          </BannerInfoDescriptionWrapper>
        </BannerInfoWrapper>
      </BannerInfoContainer>
      <BannerLineContainer>
        <BannerLineWrapper>
          <TypeLabelList>
            <TypeLabelItem>AVATAR</TypeLabelItem>
            <TypeLabelItem>LAND</TypeLabelItem>
            <TypeLabelItem>ETC</TypeLabelItem>
          </TypeLabelList>
          <TotalList>
            <TotalListLabel>Total Listed</TotalListLabel>
            <TotalListValue>5,000,000</TotalListValue>
          </TotalList>
          <SliderControl>
            <LeftIcon src={theme.urls.back} />
            <Dot $active={true} />
            <Dot $active={false} />
            <Dot $active={false} />
            <Dot $active={false} />
            <RightIcon src={theme.urls.back} />
          </SliderControl>
        </BannerLineWrapper>
      </BannerLineContainer>
      <MarketplaceWrapper ref={containerRef}>
        <RecentNfts />
        <TrendingNfts />
      </MarketplaceWrapper>
    </MarketplaceContainer>
  );
};

export default React.memo(Marketplace);
