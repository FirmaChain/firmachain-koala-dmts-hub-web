import React from 'react';
import { useSelector } from 'react-redux';

import useTheme from '../../../hooks/useTheme';
import { rootState } from '../../../redux/reducers';
import { createTextEllipsis, stringToSeed } from '../../../utils/common';

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
  const { address } = useSelector((state: rootState) => state.wallet);
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
                    <NickNameTypo>{index === 0 ? `Koala #${stringToSeed(address)}` : 'KoalaKnights'}</NickNameTypo>
                    <AddressTypo>
                      {index === 0 ? createTextEllipsis(address, 8, 9) : 'firma1f9...s89eeifjsf'}
                    </AddressTypo>
                  </ProfileInfo>
                </RankItemTop>
                <RankItemDivider />
                <RankItemBottom>
                  <BottomLabel>Owned NFT</BottomLabel>
                  <BottomValue>{index === 0 ? 1 : 3}</BottomValue>
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
