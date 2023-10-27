import React from 'react';

import useTheme from '../../hooks/useTheme';

import {
  EventContainer,
  EventMainDateTypo,
  EventDescriptionTypo,
  EventLogo,
  EventWrapper,
  RewardContainer,
  RewardMainIcon,
  RewardMainNameTypo,
  RewardMainTitleTypo,
  TopBackground,
  TopBannerWrapper,
  CardBody,
  CardContainer,
  CardDivider,
  CardHeader,
  CardLabel,
  EventDescription,
  EventDivider,
  EventIcon,
  EventImage,
  EventItem,
  EventList,
  EventNameTypo,
  EventDateTypo,
  EventItemBottomWrapper,
  GuageBottom,
  GuageCurrent,
  GuageData,
  GuageDivider,
  GuageLabel,
  GuageMax,
  GuagePercent,
  GuageTop,
  GuageValue,
  HeaderTypo,
  RewardWrapper,
  RewardLabelTypo,
  RewardNameTypo,
  RewardIcon,
  SortWrapper,
  SortSelect,
  SortOption,
  EventButton,
} from './styles';

interface IProps {
  containerRef?: any;
}

const Event = ({ containerRef }: IProps) => {
  const { theme } = useTheme();

  return (
    <EventContainer>
      <TopBackground />
      <EventWrapper>
        <TopBannerWrapper>
          <EventLogo />
          <EventMainDateTypo>Nov 2, 2023 - Nov 4, 2023</EventMainDateTypo>
          <EventDescriptionTypo>
            Participate exclusively during the Digital Media Tech Show event period and stand a chance to acquire
            limited NFTs, KOA tokens, and FCT. Especially, only 300 limited NFTs are available and they won't be
            obtainable after this period!
          </EventDescriptionTypo>
          <RewardContainer>
            <RewardMainTitleTypo>Reward</RewardMainTitleTypo>
            <RewardMainIcon $src={theme.urls.dmtsMedal} />
            <RewardMainNameTypo>Koala Origin Emblem</RewardMainNameTypo>
          </RewardContainer>
        </TopBannerWrapper>
      </EventWrapper>

      <CardContainer ref={containerRef}>
        <CardHeader>
          <CardLabel>
            <EventIcon src={theme.urls.eventIcon} />
          </CardLabel>
          <CardDivider />
          <HeaderTypo>ONGOING</HeaderTypo>

          <SortWrapper>
            <SortSelect>
              <SortOption>Recent</SortOption>
            </SortSelect>
          </SortWrapper>
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
                  <RewardNameTypo>Koala Origin Emblem</RewardNameTypo>
                </RewardWrapper>

                <EventDivider />
                <EventItemBottomWrapper>
                  <GuageTop>
                    <GuageLabel>EXP</GuageLabel>
                    <GuageValue>
                      <GuageCurrent>2</GuageCurrent>
                      <GuageDivider>/</GuageDivider>
                      <GuageMax>5</GuageMax>
                    </GuageValue>
                  </GuageTop>
                  <GuageBottom>
                    <GuageData>
                      <GuagePercent />
                    </GuageData>
                  </GuageBottom>
                </EventItemBottomWrapper>
              </EventDescription>
            </EventItem>

            <EventItem>
              <EventImage $src={theme.urls.dummyEvent2} />
              <EventDescription>
                <EventDateTypo>Nov 2, 2023 - Nov 4, 2023</EventDateTypo>
                <EventNameTypo>Land Rush Extravaganza!</EventNameTypo>
                <RewardWrapper>
                  <RewardLabelTypo>Reward</RewardLabelTypo>
                  <RewardMainIcon />
                  <RewardNameTypo>MYSTERY BOX</RewardNameTypo>
                </RewardWrapper>
                <EventItemBottomWrapper>
                  <EventButton $active={true}>JOIN</EventButton>
                </EventItemBottomWrapper>
              </EventDescription>
            </EventItem>

            <EventItem>
              <EventImage $src={theme.urls.dummyEvent3} />
              <EventDescription>
                <EventDateTypo>Oct 20, 2023 - Nov 4, 2023</EventDateTypo>
                <EventNameTypo>Frog's Enigma : Unveilling Mystical Adentures</EventNameTypo>
                <RewardWrapper>
                  <RewardLabelTypo>Reward</RewardLabelTypo>
                  <RewardMainIcon />
                  <RewardNameTypo>MYSTERY BOX</RewardNameTypo>
                </RewardWrapper>

                <EventItemBottomWrapper>
                  <EventButton $active={true}>JOIN</EventButton>
                </EventItemBottomWrapper>
              </EventDescription>
            </EventItem>
          </EventList>
        </CardBody>
      </CardContainer>

      <CardContainer>
        <CardHeader>
          <CardLabel>
            <EventIcon src={theme.urls.eventIcon} />
          </CardLabel>
          <CardDivider />
          <HeaderTypo>ENDED</HeaderTypo>

          <SortWrapper>
            <SortSelect>
              <SortOption>Recent</SortOption>
            </SortSelect>
          </SortWrapper>
        </CardHeader>
        <CardBody>
          <EventList>
            <EventItem $disable={true}>
              <EventImage $src={theme.urls.dummyEvent4} $disable={true} />
              <EventDescription>
                <EventDateTypo>May 2, 2023 - May 4, 2023</EventDateTypo>
                <EventNameTypo>Ninja Run : Dash through the Shadows!</EventNameTypo>
                <RewardWrapper>
                  <RewardLabelTypo>Reward</RewardLabelTypo>
                  <RewardIcon />
                  <RewardNameTypo>MYSTERY BOX</RewardNameTypo>
                </RewardWrapper>
                <EventItemBottomWrapper>
                  <EventButton $active={false}>Ended event</EventButton>
                </EventItemBottomWrapper>
              </EventDescription>
            </EventItem>
            <EventItem $disable={true}>
              <EventImage $src={theme.urls.dummyEvent5} $disable={true} />
              <EventDescription>
                <EventDateTypo>May 2, 2023 - May 4, 2023</EventDateTypo>
                <EventNameTypo>Cat's Quest : Come to the Feline Aid!</EventNameTypo>
                <RewardWrapper>
                  <RewardLabelTypo>Reward</RewardLabelTypo>
                  <RewardIcon />
                  <RewardNameTypo>MYSTERY BOX</RewardNameTypo>
                </RewardWrapper>
                <EventItemBottomWrapper>
                  <EventButton $active={false}>Ended event</EventButton>
                </EventItemBottomWrapper>
              </EventDescription>
            </EventItem>
            <EventItem $disable={true}>
              <EventImage $src={theme.urls.dummyEvent6} $disable={true} />
              <EventDescription>
                <EventDateTypo>May 2, 2023 - May 4, 2023</EventDateTypo>
                <EventNameTypo>Born to Battle : Rise of the Koala Knights!</EventNameTypo>
                <RewardWrapper>
                  <RewardLabelTypo>Reward</RewardLabelTypo>
                  <RewardIcon />
                  <RewardNameTypo>MYSTERY BOX</RewardNameTypo>
                </RewardWrapper>
                <EventItemBottomWrapper>
                  <EventButton $active={false}>Ended event</EventButton>
                </EventItemBottomWrapper>
              </EventDescription>
            </EventItem>
          </EventList>
        </CardBody>
      </CardContainer>
    </EventContainer>
  );
};

export default React.memo(Event);
