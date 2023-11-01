import React from 'react';

import useTheme from '../../../hooks/useTheme';

import {
  ActionButton,
  ButtonWrapper,
  EndDateTypo,
  FCTIcon,
  FCTPriceTypo,
  NftDetailContainer,
  NftDetailWrapper,
  NftHistoryCard,
  NftIdLabel,
  NftImageWrapper,
  NftInfoContainer,
  NftNameTypo,
  NftOwnerTypo,
  NftPriceWrapper,
  NftInfoCard,
  NftTopCard,
  USDPriceTypo,
  NftInfoTitle,
  NftInfoTitleTypo,
  NftInfoDivider,
  NftPropertyList,
  NftPropertyItem,
  PropertyNameTypo,
  PropertyValueTypo,
  PropertyDescription,
  NftDescription,
  ViewCountWrapper,
  ViewCountIcon,
  ViewCountTypo,
  HistoryTable,
  HistoryTableHeader,
  HistoryTableCell,
  HistoryTableRow,
  HistoryType,
  HistoryTypeIcon,
  HistoryTypeTypo,
  HistoryFromTypo,
  HistoryToTypo,
  HistoryTimeTypo,
  TxLinkIcon,
  FCTIconMini,
  PriceWrapper,
  NftHistoryTabList,
  NftHistoryTabContents,
  HistoryTabItem,
  TabDivider,
  NftHistoryInfo,
  LatestDateTypo,
  FilterButtonWrapper,
  FilterButton,
  NftImage,
} from './styles';

const NftDetail = () => {
  const { theme } = useTheme();

  return (
    <NftDetailContainer>
      <NftDetailWrapper>
        <NftImageWrapper>
          <NftImage $src={theme.urls.dummyNft31} />
        </NftImageWrapper>
        <NftInfoContainer>
          <NftTopCard>
            <NftIdLabel>#200000</NftIdLabel>
            <NftNameTypo>Magic book : Blue</NftNameTypo>
            <NftOwnerTypo>Owned by pinkpong</NftOwnerTypo>
            <NftPriceWrapper>
              <FCTIcon />
              <FCTPriceTypo>0.0002 FCT</FCTPriceTypo>
              <USDPriceTypo>$17.423</USDPriceTypo>
            </NftPriceWrapper>
            <EndDateTypo>Sale ends in 21d 08h 23m 00s</EndDateTypo>
            <ButtonWrapper>
              <ActionButton $type={0}>BUY NOW</ActionButton>
              <ActionButton $type={1}>PLACE BID</ActionButton>
            </ButtonWrapper>
            <ViewCountWrapper>
              <ViewCountIcon />
              <ViewCountTypo>1,234,567</ViewCountTypo>
            </ViewCountWrapper>
          </NftTopCard>
          <NftInfoCard>
            <NftInfoTitle>
              <NftInfoTitleTypo>Properties</NftInfoTitleTypo>
              <NftInfoDivider />
            </NftInfoTitle>
            <NftPropertyList>
              <NftPropertyItem>
                <PropertyNameTypo>Attack</PropertyNameTypo>
                <PropertyValueTypo>CW 721</PropertyValueTypo>
                <PropertyDescription>0.004%</PropertyDescription>
              </NftPropertyItem>

              <NftPropertyItem>
                <PropertyNameTypo>Attack</PropertyNameTypo>
                <PropertyValueTypo>CW 721</PropertyValueTypo>
                <PropertyDescription>0.004%</PropertyDescription>
              </NftPropertyItem>

              <NftPropertyItem>
                <PropertyNameTypo>Attack</PropertyNameTypo>
                <PropertyValueTypo>CW 721</PropertyValueTypo>
                <PropertyDescription>0.004%</PropertyDescription>
              </NftPropertyItem>
            </NftPropertyList>

            <NftInfoTitle>
              <NftInfoTitleTypo>Description</NftInfoTitleTypo>
              <NftInfoDivider />
            </NftInfoTitle>
            <NftDescription>
              LensBird, the web3 version of Flappy Bird, is taking its first flight from Lens Protocol.
              <br />
              <br />
              LensBird is a hyper-casual game that everyone can play and enjoy together with their friends and followers
              on Lenster. In short, for the first time in the web3 gaming history, LensBird combines the elements of
              gameplay and socialising.
              <br />
              <br />
              To generate awareness about LensBird and offer everyone a reason to have a jolly good time, ReviseNFT is
              collaborating with Philand quest where your primary task would be to play the game and get better.
            </NftDescription>
          </NftInfoCard>
          <NftHistoryCard>
            <NftHistoryTabList>
              <HistoryTabItem $active={true}>
                Activity
                <TabDivider />
              </HistoryTabItem>
              <HistoryTabItem $active={false}>
                Price
                <TabDivider />
              </HistoryTabItem>
            </NftHistoryTabList>
            <NftHistoryTabContents>
              <NftHistoryInfo>
                <LatestDateTypo>6 seconds ago</LatestDateTypo>
                <FilterButtonWrapper>
                  <FilterButton>Listed</FilterButton>
                  <FilterButton>Sale</FilterButton>
                </FilterButtonWrapper>
              </NftHistoryInfo>
              <HistoryTable>
                <HistoryTableHeader>
                  <HistoryTableCell>Type</HistoryTableCell>
                  <HistoryTableCell>Price</HistoryTableCell>
                  <HistoryTableCell>From</HistoryTableCell>
                  <HistoryTableCell>To</HistoryTableCell>
                  <HistoryTableCell>Time</HistoryTableCell>
                  <HistoryTableCell></HistoryTableCell>
                </HistoryTableHeader>
                <HistoryTableRow>
                  <HistoryTableCell>
                    <HistoryType>
                      <HistoryTypeIcon src={theme.urls.swapHistoryIcon1} />
                      <HistoryTypeTypo>Listed</HistoryTypeTypo>
                    </HistoryType>
                  </HistoryTableCell>
                  <HistoryTableCell>
                    <PriceWrapper>
                      <FCTIconMini />
                      30.22212
                    </PriceWrapper>
                  </HistoryTableCell>
                  <HistoryTableCell>
                    <HistoryFromTypo>firmaEbf0...7f0d</HistoryFromTypo>
                  </HistoryTableCell>
                  <HistoryTableCell>
                    <HistoryToTypo>firmaEbf0...7f0d</HistoryToTypo>
                  </HistoryTableCell>
                  <HistoryTableCell>
                    <HistoryTimeTypo>42 minutes ago</HistoryTimeTypo>
                  </HistoryTableCell>
                  <HistoryTableCell>
                    <TxLinkIcon src={theme.urls.externalLinkArrow2} />
                  </HistoryTableCell>
                </HistoryTableRow>
                {[0, 1, 2, 3, 4, 5].map((v) => (
                  <HistoryTableRow key={v}>
                    <HistoryTableCell>
                      <HistoryType>
                        <HistoryTypeIcon src={theme.urls.swapHistoryIcon1} />
                        <HistoryTypeTypo>Listed</HistoryTypeTypo>
                      </HistoryType>
                    </HistoryTableCell>
                    <HistoryTableCell>
                      <PriceWrapper>
                        <FCTIconMini />
                        10.15202
                      </PriceWrapper>
                    </HistoryTableCell>
                    <HistoryTableCell>
                      <HistoryFromTypo>firmaEbf0...7f0d</HistoryFromTypo>
                    </HistoryTableCell>
                    <HistoryTableCell>
                      <HistoryToTypo>firmaEbf0...7f0d</HistoryToTypo>
                    </HistoryTableCell>
                    <HistoryTableCell>
                      <HistoryTimeTypo>42 minutes ago</HistoryTimeTypo>
                    </HistoryTableCell>
                    <HistoryTableCell>
                      <TxLinkIcon src={theme.urls.externalLinkArrow2} />
                    </HistoryTableCell>
                  </HistoryTableRow>
                ))}
              </HistoryTable>
            </NftHistoryTabContents>
          </NftHistoryCard>
        </NftInfoContainer>
      </NftDetailWrapper>
    </NftDetailContainer>
  );
};

export default React.memo(NftDetail);
