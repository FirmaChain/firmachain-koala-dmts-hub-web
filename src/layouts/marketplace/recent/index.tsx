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
  NftList,
  NftItem,
  NftItemImageWrapper,
  NftItemImage,
  NftItemInfoWrapper,
  NftNameWrapper,
  NftNameTypo,
  NftIdTypo,
  NftPriceWrapper,
  FCTIcon,
  FCTPriceTypo,
} from './styles';

const RecentNfts = () => {
  const { theme } = useTheme();
  const navigate = useCustomNavigate();

  const dummyNames = ['Basic Sword', 'Spell Book', 'Orc Helmet', 'Corgi'];
  return (
    <EventSectionContainer>
      <CardContainer>
        <CardHeader>
          <CardLabel>
            <EventIcon src={theme.urls.eventIcon} />
          </CardLabel>
          <CardDivider />
          <HeaderTypo>RECENT</HeaderTypo>
          <ExternalLinkIcon src={theme.urls.externalLinkArrow} onClick={() => navigate('/marketplace/lists')} />
        </CardHeader>
        <CardBody>
          <NftList>
            {[20, 31, 33, 90].map((v, index) => (
              <NftItem key={index} onClick={() => navigate('/nfts/1')}>
                <NftItemImageWrapper>
                  <NftItemImage $src={theme.urls[`dummyNft${v}`]} />
                </NftItemImageWrapper>
                <NftItemInfoWrapper>
                  <NftNameWrapper>
                    <NftNameTypo>{dummyNames[index]}</NftNameTypo>
                    <NftIdTypo>#200125</NftIdTypo>
                  </NftNameWrapper>
                  <NftPriceWrapper>
                    <FCTIcon />
                    <FCTPriceTypo>5.0 FCT</FCTPriceTypo>
                  </NftPriceWrapper>
                </NftItemInfoWrapper>
              </NftItem>
            ))}
          </NftList>
        </CardBody>
      </CardContainer>
    </EventSectionContainer>
  );
};

export default React.memo(RecentNfts);
