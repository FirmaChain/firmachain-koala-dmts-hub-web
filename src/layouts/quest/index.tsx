import React from 'react';

import useTheme from '../../hooks/useTheme';

import {
  QuestContainer,
  QuestWrapper,
  LeftContainer,
  RightContainer,
  QuestList,
  QuestItem,
  QuestTopWrapper,
  QuestBottomWrapper,
  QuestLabel,
  QuestLabelTypo,
  QuestProcess,
  QuestProcessTypo,
  QuestProcessValue,
  QuestProcessCurrentTypo,
  QuestProcessDivider,
  QuestProcessTargetTypo,
  QuestProcessGuage,
  QuestProcessGuageCurrent,
  QuestSubLabel,
  QuestSubList,
  QuestSubItem,
  QuestSubIcon,
  QuestDesc,
  QuestNameTypo,
  QuestSubProcessValue,
  QuestSubProcessCurrentTypo,
  QuestSubProcessDivider,
  QuestSubProcessTargetTypo,
  QuestSubDivider,
  QuestReward,
  QuestRewardIcon,
  QuestRewardValue,
  QuestDetailButton,
  QuestMainLabel,
  QuestMainDescription,
  QuestMainTopWrapper,
  QuestMainBottomWrapper,
  QuestBottomBg,
  MyQuestPoint,
  MyQuestPointTypo,
  MyQuestPointValue,
  BorderLine,
  MainLabelWrapper,
  QuestProcessWrapper,
  MyQuestBoardWrapper,
  BoardImage,
  BoardImage2,
} from './styles';

const Quest = () => {
  const { theme } = useTheme();

  return (
    <QuestContainer>
      <QuestBottomBg />
      <QuestWrapper>
        <LeftContainer>
          <QuestMainTopWrapper>
            <MainLabelWrapper>
              <QuestMainLabel>QUEST</QuestMainLabel>
              <BorderLine src={theme.urls.borderLine} />
            </MainLabelWrapper>
            <QuestMainDescription>
              In 'Koala Knights', enhance your gaming experience with daily quests and hub-centric missions! As you
              achieve milestones, lavish rewards await you!
            </QuestMainDescription>
          </QuestMainTopWrapper>
          <QuestMainBottomWrapper>
            <MyQuestPoint>
              <MyQuestPointTypo>My quest point</MyQuestPointTypo>
              <MyQuestPointValue>50P</MyQuestPointValue>
            </MyQuestPoint>
            <MyQuestBoardWrapper>
              <BoardImage />
              <BoardImage2 />
            </MyQuestBoardWrapper>
          </QuestMainBottomWrapper>
        </LeftContainer>
        <RightContainer>
          <QuestList>
            <QuestItem>
              <QuestTopWrapper $src={theme.urls.dummyQuest1}>
                <QuestLabel>
                  <QuestLabelTypo>DAILY QUEST</QuestLabelTypo>
                </QuestLabel>
                <QuestProcess>
                  <QuestProcessWrapper>
                    <QuestProcessTypo>Process</QuestProcessTypo>
                    <QuestProcessValue>
                      <QuestProcessCurrentTypo>3</QuestProcessCurrentTypo>
                      <QuestProcessDivider>/</QuestProcessDivider>
                      <QuestProcessTargetTypo>4</QuestProcessTargetTypo>
                    </QuestProcessValue>
                  </QuestProcessWrapper>
                  <QuestProcessGuage>
                    <QuestProcessGuageCurrent />
                  </QuestProcessGuage>
                </QuestProcess>
              </QuestTopWrapper>
              <QuestBottomWrapper>
                <QuestSubLabel>Preview Quest</QuestSubLabel>
                <QuestSubList>
                  <QuestSubItem>
                    <QuestSubIcon />
                    <QuestDesc>
                      <QuestNameTypo>Check-in</QuestNameTypo>
                      <QuestSubProcessValue>
                        <QuestSubProcessCurrentTypo>1</QuestSubProcessCurrentTypo>
                        <QuestSubProcessDivider>/</QuestSubProcessDivider>
                        <QuestSubProcessTargetTypo>1</QuestSubProcessTargetTypo>
                      </QuestSubProcessValue>
                    </QuestDesc>
                    <QuestSubDivider />
                    <QuestReward>
                      <QuestRewardIcon />
                      <QuestRewardValue>300</QuestRewardValue>
                    </QuestReward>
                  </QuestSubItem>
                  <QuestSubItem>
                    <QuestSubIcon />
                    <QuestDesc>
                      <QuestNameTypo>Dungeon Clear</QuestNameTypo>
                      <QuestSubProcessValue>
                        <QuestSubProcessCurrentTypo>5</QuestSubProcessCurrentTypo>
                        <QuestSubProcessDivider>/</QuestSubProcessDivider>
                        <QuestSubProcessTargetTypo>5</QuestSubProcessTargetTypo>
                      </QuestSubProcessValue>
                    </QuestDesc>
                    <QuestSubDivider />
                    <QuestReward>
                      <QuestRewardIcon />
                      <QuestRewardValue>300</QuestRewardValue>
                    </QuestReward>
                  </QuestSubItem>
                  <QuestSubItem>
                    <QuestSubIcon />
                    <QuestDesc>
                      <QuestNameTypo>Monster Kill</QuestNameTypo>
                      <QuestSubProcessValue>
                        <QuestSubProcessCurrentTypo>5</QuestSubProcessCurrentTypo>
                        <QuestSubProcessDivider>/</QuestSubProcessDivider>
                        <QuestSubProcessTargetTypo>5</QuestSubProcessTargetTypo>
                      </QuestSubProcessValue>
                    </QuestDesc>
                    <QuestSubDivider />
                    <QuestReward>
                      <QuestRewardIcon />
                      <QuestRewardValue>300</QuestRewardValue>
                    </QuestReward>
                  </QuestSubItem>
                  <QuestSubItem>
                    <QuestSubIcon />
                    <QuestDesc>
                      <QuestNameTypo>Boss Kill</QuestNameTypo>
                      <QuestSubProcessValue>
                        <QuestSubProcessCurrentTypo>0</QuestSubProcessCurrentTypo>
                        <QuestSubProcessDivider>/</QuestSubProcessDivider>
                        <QuestSubProcessTargetTypo>1</QuestSubProcessTargetTypo>
                      </QuestSubProcessValue>
                    </QuestDesc>
                    <QuestSubDivider />
                    <QuestReward>
                      <QuestRewardIcon />
                      <QuestRewardValue>300</QuestRewardValue>
                    </QuestReward>
                  </QuestSubItem>
                </QuestSubList>
                <QuestDetailButton>Go Daily quest</QuestDetailButton>
              </QuestBottomWrapper>
            </QuestItem>
          </QuestList>

          <QuestList>
            <QuestItem>
              <QuestTopWrapper $src={theme.urls.dummyQuest2}>
                <QuestLabel>
                  <QuestLabelTypo>HUB QUEST</QuestLabelTypo>
                </QuestLabel>
                <QuestProcess>
                  <QuestProcessWrapper>
                    <QuestProcessTypo>Process</QuestProcessTypo>
                    <QuestProcessValue>
                      <QuestProcessCurrentTypo>4</QuestProcessCurrentTypo>
                      <QuestProcessDivider>/</QuestProcessDivider>
                      <QuestProcessTargetTypo>4</QuestProcessTargetTypo>
                    </QuestProcessValue>
                  </QuestProcessWrapper>
                  <QuestProcessGuage>
                    <QuestProcessGuageCurrent style={{ width: '100%' }} />
                  </QuestProcessGuage>
                </QuestProcess>
              </QuestTopWrapper>
              <QuestBottomWrapper>
                <QuestSubLabel>Preview Quest</QuestSubLabel>
                <QuestSubList>
                  <QuestSubItem>
                    <QuestSubIcon />
                    <QuestDesc>
                      <QuestNameTypo>Daily Check-in</QuestNameTypo>
                      <QuestSubProcessValue>
                        <QuestSubProcessCurrentTypo>7</QuestSubProcessCurrentTypo>
                        <QuestSubProcessDivider>/</QuestSubProcessDivider>
                        <QuestSubProcessTargetTypo>7</QuestSubProcessTargetTypo>
                      </QuestSubProcessValue>
                    </QuestDesc>
                    <QuestSubDivider />
                    <QuestReward>
                      <QuestRewardIcon />
                      <QuestRewardValue>300</QuestRewardValue>
                    </QuestReward>
                  </QuestSubItem>
                  <QuestSubItem>
                    <QuestSubIcon />
                    <QuestDesc>
                      <QuestNameTypo>NFT Send</QuestNameTypo>
                      <QuestSubProcessValue>
                        <QuestSubProcessCurrentTypo>10</QuestSubProcessCurrentTypo>
                        <QuestSubProcessDivider>/</QuestSubProcessDivider>
                        <QuestSubProcessTargetTypo>10</QuestSubProcessTargetTypo>
                      </QuestSubProcessValue>
                    </QuestDesc>
                    <QuestSubDivider />
                    <QuestReward>
                      <QuestRewardIcon />
                      <QuestRewardValue>300</QuestRewardValue>
                    </QuestReward>
                  </QuestSubItem>
                  <QuestSubItem>
                    <QuestSubIcon />
                    <QuestDesc>
                      <QuestNameTypo>Use Koala-Fi</QuestNameTypo>
                      <QuestSubProcessValue>
                        <QuestSubProcessCurrentTypo>10</QuestSubProcessCurrentTypo>
                        <QuestSubProcessDivider>/</QuestSubProcessDivider>
                        <QuestSubProcessTargetTypo>10</QuestSubProcessTargetTypo>
                      </QuestSubProcessValue>
                    </QuestDesc>
                    <QuestSubDivider />
                    <QuestReward>
                      <QuestRewardIcon />
                      <QuestRewardValue>300</QuestRewardValue>
                    </QuestReward>
                  </QuestSubItem>
                  <QuestSubItem>
                    <QuestSubIcon />
                    <QuestDesc>
                      <QuestNameTypo>Daily Quest Clear</QuestNameTypo>
                      <QuestSubProcessValue>
                        <QuestSubProcessCurrentTypo>25</QuestSubProcessCurrentTypo>
                        <QuestSubProcessDivider>/</QuestSubProcessDivider>
                        <QuestSubProcessTargetTypo>25</QuestSubProcessTargetTypo>
                      </QuestSubProcessValue>
                    </QuestDesc>
                    <QuestSubDivider />
                    <QuestReward>
                      <QuestRewardIcon />
                      <QuestRewardValue>300</QuestRewardValue>
                    </QuestReward>
                  </QuestSubItem>
                </QuestSubList>
                <QuestDetailButton>Go Daily quest</QuestDetailButton>
              </QuestBottomWrapper>
            </QuestItem>
          </QuestList>
        </RightContainer>
      </QuestWrapper>
    </QuestContainer>
  );
};

export default React.memo(Quest);
