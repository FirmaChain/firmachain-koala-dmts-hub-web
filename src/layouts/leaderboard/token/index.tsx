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
  ExternalLinkIcon,
  Card,
  EventIcon,
  RankTable,
  RankTableHeader,
  RankTableCell,
  RankTableRow,
  TxLinkIcon,
  TableWrapper,
  ProfileInfo,
  NickNameTypo,
  AddressTypo,
  ProfileIcon,
  ProfileWrapper,
  PoolNameTypo,
  FCTIcon,
  FCTValue,
  ValueWrapper,
  MyRankInfo,
  RankTypo,
  MyRankLabel,
  MyRankTypo,
} from './styles';

const LeaderboardToken = () => {
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
          <HeaderTypo>STAKING [KOA]</HeaderTypo>
          <ExternalLinkIcon src={theme.urls.externalLinkArrow} />
        </CardHeader>
        <CardBody>
          <TableWrapper>
            <RankTable>
              <RankTableHeader>
                <RankTableCell $align='center'>Rank</RankTableCell>
                <RankTableCell>Trader</RankTableCell>
                <RankTableCell>Pool</RankTableCell>
                <RankTableCell>Volume</RankTableCell>
                <RankTableCell></RankTableCell>
              </RankTableHeader>
              {[123156984, 1, 2, 3, 4, 5, 6, 7, 8].map((v, index) => (
                <RankTableRow key={index}>
                  <RankTableCell $align='center'>
                    {index === 0 ? (
                      <MyRankInfo>
                        <MyRankLabel>MY RANK</MyRankLabel>
                        <MyRankTypo>{v}</MyRankTypo>
                      </MyRankInfo>
                    ) : (
                      <RankTypo>{v}</RankTypo>
                    )}
                  </RankTableCell>
                  <RankTableCell>
                    <ProfileWrapper>
                      <ProfileIcon $src={theme.urls.leaderboardProfile} />
                      <ProfileInfo $active={index === 0}>
                        <NickNameTypo>{index === 0 ? `Koala #${stringToSeed(address)}` : `KoalaKnights`}</NickNameTypo>
                        <AddressTypo>
                          {index === 0 ? createTextEllipsis(address, 8, 9) : 'firma1f9...s89eeifjsf'}
                        </AddressTypo>
                      </ProfileInfo>
                    </ProfileWrapper>
                  </RankTableCell>
                  <RankTableCell>
                    <PoolNameTypo>KOA Staking</PoolNameTypo>
                  </RankTableCell>
                  <RankTableCell>
                    <ValueWrapper>
                      <FCTIcon />
                      <FCTValue>12,521</FCTValue>
                    </ValueWrapper>
                  </RankTableCell>
                  <RankTableCell>
                    <TxLinkIcon src={theme.urls.externalLinkArrow2} />
                  </RankTableCell>
                </RankTableRow>
              ))}
            </RankTable>
          </TableWrapper>
        </CardBody>
      </Card>
    </CardContainer>
  );
};

export default React.memo(LeaderboardToken);
