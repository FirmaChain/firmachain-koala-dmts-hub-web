import React from 'react';

import useTheme from '../../../hooks/useTheme';
import CardBg from '../../../components/cardBg';

import {
  BorderLine,
  CanvasWrapper,
  ProgressLabel,
  ProgressValue,
  ProgressWrapper,
  StageCard,
  StageIcon,
  StageIconWrapper,
  StageInfo,
  StageInfoWrapper,
  StageSubTitleTypo,
  StageTitleTypo,
} from './styles';

const WorldCanvasStage = ({ setActiveRight }: { setActiveRight: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { theme } = useTheme();

  return (
    <CanvasWrapper>
      <StageCard $active={false}>
        <CardBg />
        <StageInfo>
          <StageIconWrapper>
            <StageIcon $src={theme.urls.worldStage1} />
          </StageIconWrapper>
          <StageInfoWrapper $active={false}>
            <StageTitleTypo>SCENARIO</StageTitleTypo>
            <StageSubTitleTypo>DUNGEON</StageSubTitleTypo>
            <BorderLine src={theme.urls.borderLine} $active={false} />
            <ProgressWrapper>
              <ProgressLabel>COMMING SOON</ProgressLabel>
              <ProgressValue></ProgressValue>
            </ProgressWrapper>
          </StageInfoWrapper>
        </StageInfo>
      </StageCard>

      <StageCard $active={true} onClick={() => setActiveRight(true)}>
        <CardBg />
        <StageInfo>
          <StageIconWrapper>
            <StageIcon $src={theme.urls.worldStage2} />
          </StageIconWrapper>
          <StageInfoWrapper $active={true}>
            <StageTitleTypo>EVENT</StageTitleTypo>
            <StageSubTitleTypo>DUNGEON</StageSubTitleTypo>
            <BorderLine src={theme.urls.borderLine} $active={true} />
            <ProgressWrapper>
              <ProgressLabel>Stage progress</ProgressLabel>
              <ProgressValue>1</ProgressValue>
            </ProgressWrapper>
          </StageInfoWrapper>
        </StageInfo>
      </StageCard>

      <StageCard $active={false}>
        <CardBg />
        <StageInfo>
          <StageIconWrapper>
            <StageIcon $src={theme.urls.worldStage3} />
          </StageIconWrapper>
          <StageInfoWrapper $active={false}>
            <StageTitleTypo>USER</StageTitleTypo>
            <StageSubTitleTypo>DUNGEON</StageSubTitleTypo>
            <BorderLine src={theme.urls.borderLine} $active={false} />
            <ProgressWrapper>
              <ProgressLabel>COMMING SOON</ProgressLabel>
              <ProgressValue></ProgressValue>
            </ProgressWrapper>
          </StageInfoWrapper>
        </StageInfo>
      </StageCard>

      <StageCard $active={false}>
        <CardBg />
        <StageInfo>
          <StageIconWrapper>
            <StageIcon $src={theme.urls.worldStage4} />
          </StageIconWrapper>
          <StageInfoWrapper $active={false}>
            <StageTitleTypo>PARTERSHIP</StageTitleTypo>
            <StageSubTitleTypo>DUNGEON</StageSubTitleTypo>
            <BorderLine src={theme.urls.borderLine} $active={false} />
            <ProgressWrapper>
              <ProgressLabel>COMMING SOON</ProgressLabel>
              <ProgressValue></ProgressValue>
            </ProgressWrapper>
          </StageInfoWrapper>
        </StageInfo>
      </StageCard>
    </CanvasWrapper>
  );
};

export default React.memo(WorldCanvasStage);
