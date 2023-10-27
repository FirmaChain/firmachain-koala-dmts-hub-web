import React from 'react';

import useTheme from '../../../hooks/useTheme';
import useCustomNavigate from '../../../hooks/useCustomNavigate';

import {
  SectionCardContainer,
  SectionCardWrapper,
  SectionWrapper,
  GameFiCard,
  StakingCard,
  LpCard,
  TicketCard,
  LabelWrapper,
  LabelGroup,
  LabelIcon,
  LabelTypo,
  LinkIcon,
  RewardWrapper,
  TitleTypo,
  RewardCardList,
  RewardCard,
  CardTitleTypo,
  ValueWrapper,
  ValueItem,
  ValueIcon,
  ValueTypo,
  ValueCurrency,
  StakingTop,
  StakingBottom,
  LabelRound,
  StakingInfoList,
  StakingInfoItem,
  StakingInfoLabel,
  StakingInfoValue,
  StakingDivider,
  StakingChartLabel,
  StakingChart,
  LpTop,
  LpBottom,
  APRInfo,
  APRTitle,
  APRValueItem,
  APRValue,
  APRPercent,
  LpInfoList,
  LpInfoItem,
  LpInfoLabel,
  LpInfoValue,
  LpDivider,
  TicketTop,
  TicketBottom,
  TicketIcon,
  TicketCount,
  LabelIcon2,
  KOAIcon,
} from './styles';

interface IProps {
  containerRef?: any;
}

const SectionCard = ({ containerRef }: IProps) => {
  const { theme } = useTheme();
  const nagivate = useCustomNavigate();

  return (
    <SectionCardContainer ref={containerRef}>
      <SectionCardWrapper>
        <SectionWrapper>
          <GameFiCard>
            <LabelWrapper>
              <LabelGroup>
                <LabelIcon src={theme.urls.labelIcon}></LabelIcon>
                <LabelTypo>GAME-FI</LabelTypo>
              </LabelGroup>
              <LinkIcon src={theme.urls.cardLinkIcon} onClick={() => nagivate('/koala-fi/staking')} />
            </LabelWrapper>
            <RewardWrapper>
              <TitleTypo>REWARD</TitleTypo>
              <RewardCardList>
                <RewardCard>
                  <CardTitleTypo>Staking</CardTitleTypo>
                  <ValueWrapper>
                    <ValueItem>
                      <ValueIcon />
                      <ValueTypo>10.621</ValueTypo>
                      <ValueCurrency>FCT</ValueCurrency>
                    </ValueItem>
                    <ValueItem>
                      <KOAIcon />
                      <ValueTypo>50</ValueTypo>
                      <ValueCurrency>KOA</ValueCurrency>
                    </ValueItem>
                  </ValueWrapper>
                </RewardCard>
                <RewardCard>
                  <CardTitleTypo>LP-POOL</CardTitleTypo>
                  <ValueWrapper>
                    <ValueItem>
                      <ValueIcon />
                      <ValueTypo>50.432123</ValueTypo>
                      <ValueCurrency>FCT</ValueCurrency>
                    </ValueItem>
                  </ValueWrapper>
                </RewardCard>
              </RewardCardList>
            </RewardWrapper>
          </GameFiCard>
        </SectionWrapper>
        <SectionWrapper>
          <StakingCard>
            <StakingTop>
              <LabelRound>
                <LabelIcon2 src={theme.urls.labelIcon2} />
                STAKING
              </LabelRound>
              <StakingInfoList>
                <StakingInfoItem>
                  <StakingInfoLabel>NFT Staked</StakingInfoLabel>
                  <StakingInfoValue>12</StakingInfoValue>
                </StakingInfoItem>
                <StakingDivider />
                <StakingInfoItem>
                  <StakingInfoLabel>FCT Staked</StakingInfoLabel>
                  <StakingInfoValue>8000</StakingInfoValue>
                </StakingInfoItem>
              </StakingInfoList>
            </StakingTop>
            <StakingBottom>
              <StakingChartLabel>2 POOL</StakingChartLabel>
              <StakingChart />
            </StakingBottom>
          </StakingCard>
        </SectionWrapper>
        <SectionWrapper>
          <LpCard>
            <LpTop>
              <LabelRound>
                <LabelIcon2 src={theme.urls.labelIcon2} />
                LP-POOL
              </LabelRound>
              <APRInfo>
                <APRTitle>APR</APRTitle>
                <APRValueItem>
                  <APRValue>68</APRValue>
                  <APRPercent>%</APRPercent>
                </APRValueItem>
              </APRInfo>
            </LpTop>
            <LpBottom>
              <LpInfoList>
                <LpInfoItem>
                  <LpInfoLabel>NFT Staked</LpInfoLabel>
                  <LpInfoValue>12</LpInfoValue>
                </LpInfoItem>
                <LpDivider />
                <LpInfoItem>
                  <LpInfoLabel>FCT Staked</LpInfoLabel>
                  <LpInfoValue>500</LpInfoValue>
                </LpInfoItem>
              </LpInfoList>
            </LpBottom>
          </LpCard>
          <TicketCard>
            <TicketTop>
              <LabelRound>
                <LabelIcon2 src={theme.urls.labelIcon2} />
                TICKET
              </LabelRound>
            </TicketTop>
            <TicketBottom>
              <TicketIcon />
              <TicketCount>x3</TicketCount>
            </TicketBottom>
          </TicketCard>
        </SectionWrapper>
      </SectionCardWrapper>
    </SectionCardContainer>
  );
};

export default React.memo(SectionCard);
