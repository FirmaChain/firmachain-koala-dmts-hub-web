import React from 'react';

import useTheme from '../../../hooks/useTheme';
import useCustomNavigate from '../../../hooks/useCustomNavigate';

import {
  CardBody,
  CardContainer,
  CardDivider,
  CardHeader,
  CardLabel,
  EventIcon,
  EventSectionContainer,
  HeaderTypo,
  ExternalLinkIcon,
  TrendingContainer,
  TrendingWrapper,
  NftList,
  NftItem,
  NftIndexTypo,
  NftImageWrapper,
  NftImage,
  NftInfoWrapper,
  NftNameTypo,
  NftIdTypo,
  FCTIcon,
  FCTPriceTypo,
} from './styles';

const TrendingNfts = () => {
  const { theme } = useTheme();
  const navigate = useCustomNavigate();

  const nftList = [20, 21, 22, 23, 24, 25, 26, 28, 29, 30];

  return (
    <EventSectionContainer>
      <CardContainer>
        <CardHeader>
          <CardLabel>
            <EventIcon src={theme.urls.eventIcon} />
          </CardLabel>
          <CardDivider />
          <HeaderTypo>TRENDING</HeaderTypo>
          <ExternalLinkIcon src={theme.urls.externalLinkArrow} onClick={() => navigate('/marketplace/lists')} />
        </CardHeader>
        <CardBody>
          <TrendingContainer>
            <TrendingWrapper>
              <NftList>
                {[0, 1, 2, 3, 4].map((v) => (
                  <NftItem key={v} onClick={() => navigate('/nfts/1')}>
                    <NftIndexTypo>{v + 1}</NftIndexTypo>
                    <NftImageWrapper>
                      <NftImage $src={theme.urls[`dummyNft${nftList[v]}`]} />
                    </NftImageWrapper>
                    <NftInfoWrapper>
                      <NftNameTypo>Yellow Spray</NftNameTypo>
                      <NftIdTypo>#20000</NftIdTypo>
                    </NftInfoWrapper>
                    <FCTIcon />
                    <FCTPriceTypo>0.025 FCT</FCTPriceTypo>
                  </NftItem>
                ))}
              </NftList>
            </TrendingWrapper>
            <TrendingWrapper>
              <NftList>
                {[5, 6, 7, 8, 9].map((v) => (
                  <NftItem key={v} onClick={() => navigate('/nfts/1')}>
                    <NftIndexTypo>{v + 1}</NftIndexTypo>
                    <NftImageWrapper>
                      <NftImage $src={theme.urls[`dummyNft${nftList[v]}`]} />
                    </NftImageWrapper>
                    <NftInfoWrapper>
                      <NftNameTypo>Yellow Spray</NftNameTypo>
                      <NftIdTypo>#20000</NftIdTypo>
                    </NftInfoWrapper>
                    <FCTIcon />
                    <FCTPriceTypo>0.025 FCT</FCTPriceTypo>
                  </NftItem>
                ))}
              </NftList>
            </TrendingWrapper>
          </TrendingContainer>
        </CardBody>
      </CardContainer>
    </EventSectionContainer>
  );
};

export default React.memo(TrendingNfts);
