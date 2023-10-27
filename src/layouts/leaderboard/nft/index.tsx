import React from 'react';

import useTheme from '../../../hooks/useTheme';

import {
  CardContainer,
  CardHeader,
  CardLabel,
  CardDivider,
  CardBody,
  HeaderTypo,
  // ExternalLinkIcon,
  Card,
  EventIcon,
  // CommingSoonTypo,
  RankList,
  RankItem,
  RankItemTop,
  ProfileIcon,
  ProfileInfo,
  NickNameTypo,
  AddressTypo,
  RankItemBottom,
  RankItemDivider,
  BottomLabel,
  BottomValue,
  RankIndex,
} from './styles';

const LeaderboardNft = () => {
  const { theme } = useTheme();

  return (
    <CardContainer>
      <Card>
        <CardHeader>
          <CardLabel>
            <EventIcon src={theme.urls.eventIcon} />
          </CardLabel>
          <CardDivider />
          <HeaderTypo>HOLDING NFTs</HeaderTypo>
          {/* <ExternalLinkIcon src={theme.urls.externalLinkArrow} /> */}
        </CardHeader>
        <CardBody>
          {/* <CommingSoonTypo>COMMING SOON!</CommingSoonTypo> */}
          <RankList>
            {[123156984, 1, 2, 3, 4, 5, 6, 7, 8].map((v, index) => (
              <RankItem key={index} $active={index === 0}>
                <RankIndex>{v}</RankIndex>
                <RankItemTop>
                  <ProfileIcon $src={theme.urls.leaderboardProfile} />
                  <ProfileInfo>
                    <NickNameTypo>KoalaKnights</NickNameTypo>
                    <AddressTypo>04df9e8f9...s89ef</AddressTypo>
                  </ProfileInfo>
                </RankItemTop>
                <RankItemDivider />
                <RankItemBottom>
                  <BottomLabel>Owned NFT</BottomLabel>
                  <BottomValue>200</BottomValue>
                </RankItemBottom>
              </RankItem>
            ))}
          </RankList>
        </CardBody>
      </Card>
    </CardContainer>
  );
};

export default React.memo(LeaderboardNft);
