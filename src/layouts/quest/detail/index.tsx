import React from 'react';

import {
  QuestDetailContainer,
  QuestWrapper,
  TopWrapper,
  TopContents,
  BottomWrapper,
  QuestDetailCard,
  DescriptionWrapper,
  TitleTypo,
  SubTitleTypo,
  ProcessWrapper,
  QuestProcessGuage,
  QuestProcessGuageCurrent,
  QuestProcessValue,
  QuestProcessCurrentTypo,
  QuestProcessTargetTypo,
  QuestProcessDivider,
  QuestSubList,
  QuestSubItem,
  QuestSubIcon,
  QuestDesc,
  QuestSubProcess,
  QuestSubProcessValue,
  QuestSubProcessCurrentTypo,
  QuestSubProcessDivider,
  QuestSubProcessTargetTypo,
  QuestSubDivider,
  QuestNameTypo,
  QuestReward,
  QuestRewardIcon,
  QuestRewardValue,
  QuestSubProcessGuage,
  QuestSubProcessGuageCurrent,
  PlayButton,
  QuestDescTypo,
  QuestSubHeaderList,
} from './styles';

const QuestDetail = ({ type }: { type: string }) => {
  return (
    <QuestDetailContainer>
      <QuestWrapper>
        <QuestDetailCard>
          <TopWrapper $type={type}>
            <TopContents>
              <DescriptionWrapper>
                <TitleTypo>DAILY QUEST</TitleTypo>
                <SubTitleTypo>Daily events reset at 5:00</SubTitleTypo>
              </DescriptionWrapper>
              <ProcessWrapper>
                <QuestProcessGuage>
                  <QuestProcessGuageCurrent />
                </QuestProcessGuage>

                <QuestProcessValue>
                  <QuestProcessCurrentTypo>5</QuestProcessCurrentTypo>
                  <QuestProcessDivider>/</QuestProcessDivider>
                  <QuestProcessTargetTypo>5</QuestProcessTargetTypo>
                </QuestProcessValue>
              </ProcessWrapper>
            </TopContents>
          </TopWrapper>
          <BottomWrapper>
            <QuestSubHeaderList> </QuestSubHeaderList>
            <QuestSubList>
              {[0, 1, 2, 3, 4].map((v) => {
                return (
                  <QuestSubItem key={v}>
                    <QuestSubIcon $type={type} />
                    <QuestDesc>
                      <QuestNameTypo>Treasure Cup x AI Arena Final 4 Knockout Tournament</QuestNameTypo>
                      <QuestDescTypo>
                        Tigonia compliments the many offerings available to the fans of The Order of the Tigons, Theta,
                        and Jon Heder...Tigonia compliments the many offerings..
                      </QuestDescTypo>
                    </QuestDesc>
                    <QuestSubDivider />
                    <QuestSubProcess>
                      <QuestSubProcessValue>
                        <QuestSubProcessCurrentTypo>5</QuestSubProcessCurrentTypo>
                        <QuestSubProcessDivider>/</QuestSubProcessDivider>
                        <QuestSubProcessTargetTypo>5</QuestSubProcessTargetTypo>
                      </QuestSubProcessValue>
                      <QuestSubProcessGuage>
                        <QuestSubProcessGuageCurrent />
                      </QuestSubProcessGuage>
                    </QuestSubProcess>
                    <QuestSubDivider />
                    <QuestReward>
                      <QuestRewardIcon />
                      <QuestRewardValue>300</QuestRewardValue>
                    </QuestReward>
                    <QuestSubDivider />
                    <PlayButton>PLAY</PlayButton>
                  </QuestSubItem>
                );
              })}
            </QuestSubList>
          </BottomWrapper>
        </QuestDetailCard>
      </QuestWrapper>
    </QuestDetailContainer>
  );
};

export default React.memo(QuestDetail);
