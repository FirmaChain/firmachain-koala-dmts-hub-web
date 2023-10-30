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
  EventList,
  EventItem,
  EventImage,
  EventDescription,
  EventDateTypo,
  EventNameTypo,
  RewardWrapper,
  RewardLabelTypo,
  RewardIcon,
  RewardNameTypo,
  EventDivider,
  GaugeWrapper,
  GuageTop,
  GuageLabel,
  GuageValue,
  GuageCurrent,
  GuageDivider,
  GuageMax,
  GuageBottom,
  GuageData,
  GuagePercent,
} from './styles';

const SectionEvent = () => {
  const { theme } = useTheme();
  const navigate = useCustomNavigate();

  return (
    <EventSectionContainer>
      <CardContainer>
        <CardHeader>
          <CardLabel>
            <EventIcon src={theme.urls.eventIcon} />
          </CardLabel>
          <CardDivider />
          <HeaderTypo>MY EVENT</HeaderTypo>
          <ExternalLinkIcon src={theme.urls.externalLinkArrow} onClick={() => navigate('/events')} />
        </CardHeader>
        <CardBody>
          <EventList>
            <EventItem>
              <EventImage $src={theme.urls.dummyEvent1} />
              <EventDescription>
                <EventDateTypo>Nov 2, 2023 - Nov 4, 2023</EventDateTypo>
                <EventNameTypo>DMTS Special Dungeon : Exclusive Adventure</EventNameTypo>
                <RewardWrapper>
                  <RewardLabelTypo>Reward</RewardLabelTypo>
                  <RewardIcon $src={theme.urls.dmtsMedal} />
                  <RewardNameTypo>Koala Emblem: DMTS</RewardNameTypo>
                </RewardWrapper>

                <EventDivider />
                <GaugeWrapper>
                  <GuageTop>
                    <GuageLabel>EXP</GuageLabel>
                    <GuageValue>
                      <GuageCurrent>1</GuageCurrent>
                      <GuageDivider>/</GuageDivider>
                      <GuageMax>5</GuageMax>
                    </GuageValue>
                  </GuageTop>
                  <GuageBottom>
                    <GuageData>
                      <GuagePercent style={{ width: '20%' }} />
                    </GuageData>
                  </GuageBottom>
                </GaugeWrapper>
              </EventDescription>
            </EventItem>

            <EventItem>
              <EventImage $src={theme.urls.dummyEvent2} />
              <EventDescription>
                <EventDateTypo>Nov 2, 2023 - Nov 4, 2023</EventDateTypo>
                <EventNameTypo>Land Rush Extravaganza!</EventNameTypo>
                <RewardWrapper>
                  <RewardLabelTypo>Reward</RewardLabelTypo>
                  <RewardIcon />
                  <RewardNameTypo>MYSTERY BOX</RewardNameTypo>
                </RewardWrapper>

                <EventDivider />
                <GaugeWrapper>
                  <GuageTop>
                    <GuageLabel>EXP</GuageLabel>
                    <GuageValue>
                      <GuageCurrent>5</GuageCurrent>
                      <GuageDivider>/</GuageDivider>
                      <GuageMax>5</GuageMax>
                    </GuageValue>
                  </GuageTop>
                  <GuageBottom>
                    <GuageData>
                      <GuagePercent style={{ width: '100%' }} />
                    </GuageData>
                  </GuageBottom>
                </GaugeWrapper>
              </EventDescription>
            </EventItem>

            <EventItem>
              <EventImage $src={theme.urls.dummyEvent3} />
              <EventDescription>
                <EventDateTypo>Oct 20, 2023 - Nov 4, 2023</EventDateTypo>
                <EventNameTypo>Frog's Enigma : Unveilling Mystical Adentures</EventNameTypo>
                <RewardWrapper>
                  <RewardLabelTypo>Reward</RewardLabelTypo>
                  <RewardIcon />
                  <RewardNameTypo>MYSTERY BOX</RewardNameTypo>
                </RewardWrapper>

                <EventDivider />
                <GaugeWrapper>
                  <GuageTop>
                    <GuageLabel>EXP</GuageLabel>
                    <GuageValue>
                      <GuageCurrent>3</GuageCurrent>
                      <GuageDivider>/</GuageDivider>
                      <GuageMax>5</GuageMax>
                    </GuageValue>
                  </GuageTop>
                  <GuageBottom>
                    <GuageData>
                      <GuagePercent style={{ width: '60%' }} />
                    </GuageData>
                  </GuageBottom>
                </GaugeWrapper>
              </EventDescription>
            </EventItem>
          </EventList>
        </CardBody>
      </CardContainer>
    </EventSectionContainer>
  );
};

export default React.memo(SectionEvent);
