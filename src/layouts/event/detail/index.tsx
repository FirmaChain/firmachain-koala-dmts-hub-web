import React from 'react';

import useTheme from '../../../hooks/useTheme';

import {
  EventDetailContainer,
  EventDetailWrapper,
  LeftWrapper,
  RightWrapper,
  CardContainer,
  CardHeader,
  HeaderTitleTypo,
  HeaderDateTypo,
  CardBody,
  ProgressContainer,
  ProgressTitleTypo,
  ProgressDivider,
  ProgressSubDivider,
  GuageWrapper,
  GuageTop,
  GuageLabel,
  GuageValue,
  GuageCurrent,
  GuageDivider,
  GuageMax,
  GuageBottom,
  GuageData,
  GuagePercent,
  EventQuestList,
  EventQuestItem,
  EventQuestIcon,
  EventQuestDescWrapper,
  EventQuestTitleTypo,
  EventQuestDescTypo,
  EventQuestValueWrapper,
  EventQuestValueCurrent,
  EventQuestValueDivider,
  EventQuestValueMax,
  EventDetailBanner,
  ResolutionDiv,
  BannerReward,
  BannerRewardTypo,
  BannerRewardDivider,
  BannerRewardList,
  BannerRewardItem,
  BannerRewardIcon,
  BannerRewardText,
  DescriptionWrapper,
  DescriptionTitleTypo,
  DescriptionContents,
  EventQuestCurrentWrapper,
  EventQuestPlayButton,
} from './styles';

const EventDetail = ({ eventId }: { eventId: string }) => {
  const { theme } = useTheme();

  const renderEventDetailCard = () => {
    return (
      <CardContainer>
        <CardHeader>
          <HeaderTitleTypo>Treasure Cup x AI Arena FInal4 Knockout Tournament</HeaderTitleTypo>
          <HeaderDateTypo>May 15, 2023 ~ May 29, 2023</HeaderDateTypo>
        </CardHeader>
        <CardBody>
          <ProgressContainer>
            <ProgressTitleTypo>EVENT PROGRESS</ProgressTitleTypo>
            <ProgressDivider>
              <ProgressSubDivider />
            </ProgressDivider>
            <GuageWrapper>
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
                  <GuagePercent />
                </GuageData>
              </GuageBottom>
            </GuageWrapper>
          </ProgressContainer>
          <EventQuestList>
            <EventQuestItem>
              <EventQuestIcon />
              <EventQuestDescWrapper>
                <EventQuestTitleTypo>Turtle Land- Seaweed..</EventQuestTitleTypo>
                <EventQuestDescTypo>Rewards are paid exclusiv..</EventQuestDescTypo>
              </EventQuestDescWrapper>
              <EventQuestCurrentWrapper>
                <EventQuestValueWrapper>
                  <EventQuestValueCurrent>5</EventQuestValueCurrent>
                  <EventQuestValueDivider>/</EventQuestValueDivider>
                  <EventQuestValueMax>5</EventQuestValueMax>
                </EventQuestValueWrapper>
                <EventQuestPlayButton src={theme.urls.eventGameStart} />
              </EventQuestCurrentWrapper>
            </EventQuestItem>
            <EventQuestItem>
              <EventQuestIcon />
              <EventQuestDescWrapper>
                <EventQuestTitleTypo>Turtle Land- Seaweed..</EventQuestTitleTypo>
                <EventQuestDescTypo>Rewards are paid exclusiv..</EventQuestDescTypo>
              </EventQuestDescWrapper>
              <EventQuestCurrentWrapper>
                <EventQuestValueWrapper>
                  <EventQuestValueCurrent>5</EventQuestValueCurrent>
                  <EventQuestValueDivider>/</EventQuestValueDivider>
                  <EventQuestValueMax>5</EventQuestValueMax>
                </EventQuestValueWrapper>
                <EventQuestPlayButton src={theme.urls.eventGameStart} />
              </EventQuestCurrentWrapper>
            </EventQuestItem>
            <EventQuestItem>
              <EventQuestIcon />
              <EventQuestDescWrapper>
                <EventQuestTitleTypo>Turtle Land- Seaweed..</EventQuestTitleTypo>
                <EventQuestDescTypo>Rewards are paid exclusiv..</EventQuestDescTypo>
              </EventQuestDescWrapper>
              <EventQuestCurrentWrapper>
                <EventQuestValueWrapper>
                  <EventQuestValueCurrent>5</EventQuestValueCurrent>
                  <EventQuestValueDivider>/</EventQuestValueDivider>
                  <EventQuestValueMax>5</EventQuestValueMax>
                </EventQuestValueWrapper>
                <EventQuestPlayButton src={theme.urls.eventGameStart} />
              </EventQuestCurrentWrapper>
            </EventQuestItem>
            <EventQuestItem>
              <EventQuestIcon />
              <EventQuestDescWrapper>
                <EventQuestTitleTypo>Turtle Land- Seaweed..</EventQuestTitleTypo>
                <EventQuestDescTypo>Rewards are paid exclusiv..</EventQuestDescTypo>
              </EventQuestDescWrapper>
              <EventQuestCurrentWrapper>
                <EventQuestValueWrapper>
                  <EventQuestValueCurrent>5</EventQuestValueCurrent>
                  <EventQuestValueDivider>/</EventQuestValueDivider>
                  <EventQuestValueMax>5</EventQuestValueMax>
                </EventQuestValueWrapper>
                <EventQuestPlayButton src={theme.urls.eventGameStart} />
              </EventQuestCurrentWrapper>
            </EventQuestItem>
          </EventQuestList>
        </CardBody>
      </CardContainer>
    );
  };

  return (
    <EventDetailContainer>
      <EventDetailWrapper>
        <LeftWrapper>{renderEventDetailCard()}</LeftWrapper>
        <RightWrapper>
          <EventDetailBanner>
            <BannerReward>
              <BannerRewardTypo>REWARD</BannerRewardTypo>
              <BannerRewardDivider />
              <BannerRewardList>
                <BannerRewardItem>
                  <BannerRewardIcon />
                  <BannerRewardText>MYSTERY BOX</BannerRewardText>
                </BannerRewardItem>
                <BannerRewardItem>
                  <BannerRewardIcon />
                  <BannerRewardText>MYSTERY BOX</BannerRewardText>
                </BannerRewardItem>
              </BannerRewardList>
            </BannerReward>
          </EventDetailBanner>
          <ResolutionDiv>{renderEventDetailCard()}</ResolutionDiv>
          <DescriptionWrapper>
            <DescriptionTitleTypo>DESCRIPTION</DescriptionTitleTypo>
            <DescriptionContents>
              {`Exclusively for Avatar Owners Celebrate all things old and new in The Sandbox May Festival! 
Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.

Meet new friends, enjoy content from your favorite brands and earn rewards along the way!

Complete 200 quests available in over 70 experiences to unlock your May Festival prizes:

Exclusively for Avatar Owners Celebrate all things 
old and new in The Sandbox May Festival! 
Immerse yourself 
in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.

Meet new friends, enjoy content from your favorite brands and earn rewards along the way! Complete 200 quests available in over 70

 experiences to unlock your May Festival prizes:

Exclusively for Avatar Owners Celebrate all things old and new in The Sandbox May Festival! 
Immerse 
yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.

Meet new friends, 
enjoy content from your favorite brands and earn rewards along the way! Complete 200 quests available in over 70 experiences to unlock your May Festival prizes:

Exclusively for Avatar Owners Celebrate all things old and new in The Sandbox May Festival! 
Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.

available in over 70 experiences to unlock your May Festival prizes:

Exclusively for Avatar Owners Celebrate all things old and new in The Sandbox May Festival! 
Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.
`}
            </DescriptionContents>
          </DescriptionWrapper>
        </RightWrapper>
      </EventDetailWrapper>
    </EventDetailContainer>
  );
};

export default React.memo(EventDetail);
