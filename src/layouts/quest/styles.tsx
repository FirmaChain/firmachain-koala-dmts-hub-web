import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

const questSmallScreen = '1500px';
const questMobilScreen = '1000px';

export const QuestContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${questMobilScreen}) and (max-width: ${questSmallScreen}) {
    padding: 70px 50px;
  }

  @media only screen and (max-width: ${questMobilScreen}) {
    padding: 70px 40px;
  }
`;

export const QuestBottomBg = styled.div`
  width: 100%;
  height: 400px;
  position: absolute;
  bottom: 0;
  opacity: 0.7;
  background-image: url('${({ theme }) => theme.urls.questBottomBg}');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media only screen and (max-width: 1600px) {
    height: 290px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    height: 100px;
  }
`;

export const QuestWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 40px;
  padding: 40px 0;
  @media only screen and (max-width: ${questSmallScreen}) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  width: 300px;
  min-width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${questMobilScreen}) and (max-width: ${questSmallScreen}) {
    align-items: flex-start;
    width: 100%;
    gap: 50px;
    & > div:nth-child(1) {
      width: 300px;
    }
    & > div:nth-child(2) {
      width: 300px;
    }
  }

  @media only screen and (max-width: ${questMobilScreen}) {
    align-items: flex-start;
    gap: 50px;
    & > div:nth-child(2) {
      width: 300px;
    }
  }
`;

export const QuestMainTopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;

export const QuestMainBottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MyQuestPoint = styled.div`
  width: 100%;
  padding-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.questBorder3};
`;

export const MyQuestPointTypo = styled.div`
  color: ${({ theme }) => theme.colors.eventSub};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 500;
  line-height: 20px;
`;

export const MyQuestPointValue = styled.div`
  font-size: ${({ theme }) => theme.sizes.font20};
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const MyQuestIcon = styled.div`
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  background-image: url('${({ theme }) => theme.urls.dummyBox}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const MainLabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const QuestMainLabel = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.font50};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};
  -webkit-text-stroke: 2px ${({ theme }) => theme.colors.textPrimary};
  text-shadow: 1px 1px ${({ theme }) => theme.colors.textPrimary}, 2px 2px ${({ theme }) => theme.colors.textPrimary},
    3px 3px ${({ theme }) => theme.colors.textPrimary}, 4px 4px ${({ theme }) => theme.colors.textPrimary},
    5px 5px ${({ theme }) => theme.colors.textPrimary}, 6px 6px ${({ theme }) => theme.colors.textPrimary};
`;

export const BorderLine = styled(ReactSVG)`
  width: 163px;
  overflow: hidden;
  & > div {
    width: 374px;
    height: 3px;
    display: flex;
  }
  svg {
    rect {
      fill: ${({ theme }) => theme.colors.textPrimary};
    }
    width: 374px;
    height: 3px;
  }

  margin-top: 5px;
  margin-bottom: 15px;
`;

export const QuestMainDescription = styled.div`
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.questDescription};
`;

export const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: ${questMobilScreen}) {
    flex-direction: column;
    & > div {
      width: 100%;
      & > div {
        width: 100%;
        max-width: 100%;
      }
    }
  }
`;

export const QuestList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuestItem = styled.div`
  width: 100%;
  height: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.questBorder};
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};

  @media only screen and (min-width: ${questMobilScreen}) and (max-width: ${questSmallScreen}) {
    max-width: 100%;
  }
`;

export const QuestTopWrapper = styled.div<{ $src: string }>`
  width: 100%;
  min-height: 280px;
  position: relative;
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 20px 20px 0 0;
  background-image: url('${({ $src }) => $src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-bottom: 1px solid ${({ theme }) => theme.colors.questBorder};
`;

export const QuestLabel = styled.div`
  width: 218px;
  height: 78px;
  margin-left: -17px;
  margin-top: -17px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('${({ theme }) => theme.urls.questLabel}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const QuestLabelTypo = styled.div`
  margin-top: -20px;
  font-size: ${({ theme }) => theme.sizes.font28};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const QuestProcess = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const QuestProcessTypo = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export const QuestProcessValue = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1px;
`;

export const QuestProcessCurrentTypo = styled.div`
  text-edge: cap;
  font-size: ${({ theme }) => theme.sizes.font26};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const QuestProcessDivider = styled.div`
  font-size: ${({ theme }) => theme.sizes.font20};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.questProcess};
`;

export const QuestProcessTargetTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font26};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.questProcess};
`;

export const QuestProcessGuage = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.questProcess};
`;

export const QuestProcessGuageCurrent = styled.div`
  width: 75%;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const QuestBottomWrapper = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  padding: 30px 36px;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media only screen and (min-width: ${questMobilScreen}) and (max-width: ${questSmallScreen}) {
    min-height: 500px;
  }
`;

export const QuestSubLabel = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.questSub};
  display: flex;
`;

export const QuestSubList = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  overflow-y: auto;
`;

export const QuestSubItem = styled.div`
  width: 100%;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.questBorder2};
  background-color: ${({ theme }) => theme.colors.questBg};
`;

export const QuestSubIcon = styled.div`
  width: 60px;
  min-width: 60px;
  height: 60px;
  background-image: url('${({ theme }) => theme.urls.questSubIcon}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const QuestDesc = styled.div`
  padding: 0 10px 0 10px;
  width: 100%;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const QuestNameTypo = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1.4;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.questBorder};
`;

export const QuestSubProcessValue = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1px;
`;

export const QuestSubProcessCurrentTypo = styled.div`
  text-edge: cap;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const QuestSubProcessDivider = styled.div`
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.questSub};
`;

export const QuestSubProcessTargetTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.questSub};
`;

export const QuestSubDivider = styled.div`
  width: 2px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.questDivider};
`;

export const QuestReward = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const QuestRewardIcon = styled.div`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  background-image: url('${({ theme }) => theme.urls.boxIcon}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const QuestRewardValue = styled.div`
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.questBorder};
`;

export const QuestDetailButton = styled.div`
  width: 100%;
  height: 60px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.buttonBorder};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.buttonBorder};
`;

export const QuestProcessWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyQuestBoardWrapper = styled.div`
  width: 280px;
  height: 280px;
  position: relative;
`;

export const BoardImage = styled.div`
  width: 280px;
  height: 280px;
  image-rendering: pixelated;
  background-image: url('${({ theme }) => theme.urls.questBoard}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BoardImage2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 96px;
  height: 112px;
  image-rendering: pixelated;
  background-image: url('${({ theme }) => theme.urls.questBoard2}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
