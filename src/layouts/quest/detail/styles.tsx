import styled from 'styled-components';

export const QuestDetailContainer = styled.div`
  width: 100%;
  padding: 70px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    padding: 70px 50px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 70px 40px;
  }
`;

export const QuestWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuestDetailCard = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.questBorder2};
  background: ${({ theme }) => theme.colors.white}99;
`;

export const TopWrapper = styled.div<{ $type: string }>`
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  image-rendering: pixelated;
  border: 1px solid ${({ theme }) => theme.colors.questBorder};
  background-image: url('${({ theme, $type }) =>
    $type === 'daily' ? theme.urls.questDetailTopBg : theme.urls.questDetailTopBg2}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TopContents = styled.div`
  width: auto;
  height: 100%;
  margin-top: -10px;
  padding-left: 320px;
  padding-right: 50px;
  gap: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding-left: 50px;
  }
`;

export const BottomWrapper = styled.div`
  width: 100%;
  padding: 10px 36px 36px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuestSubHeaderList = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 22px;
  gap: 10px;
`;

export const QuestSubHeaderItem = styled.div<{ $width: string; $minWidth?: string }>`
  width: ${({ $width }) => $width};
  ${({ $minWidth }) => $minWidth && `min-width:${$minWidth};`}
  height: 50px;
  padding: 0 10px;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.questBorder3};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
`;

export const TitleTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font50};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};
  -webkit-text-stroke: 2px ${({ theme }) => theme.colors.textPrimary};
  text-shadow: 1px 1px ${({ theme }) => theme.colors.textPrimary}, 2px 2px ${({ theme }) => theme.colors.textPrimary},
    3px 3px ${({ theme }) => theme.colors.textPrimary}, 4px 4px ${({ theme }) => theme.colors.textPrimary},
    5px 5px ${({ theme }) => theme.colors.textPrimary}, 6px 6px ${({ theme }) => theme.colors.textPrimary};
`;

export const SubTitleTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const ProcessWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
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
  margin-bottom: 8px;
`;

export const QuestProcessValue = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
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
  max-width: 500px;
  height: 10px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.questProcess}80;
`;

export const QuestProcessGuageCurrent = styled.div`
  width: 100px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const QuestSubList = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const QuestSubItem = styled.div`
  width: 100%;
  height: 140px;
  padding-left: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.questBorder2};
  background-color: ${({ theme }) => theme.colors.questBg};

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    flex-direction: column;
    height: auto;
    padding: 20px;
    gap: 20px;
  }
`;

export const QuestSubIcon = styled.div<{ $type: string }>`
  width: 97px;
  min-width: 97px;
  height: 97px;
  background-image: url('${({ theme, $type }) =>
    $type === 'daily' ? theme.urls.questSubIcon : theme.urls.questSubIcon2}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const QuestDesc = styled.div`
  padding: 0 10px 0 10px;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
  }
`;

export const QuestNameTypo = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.questBorder};
`;

export const QuestDescTypo = styled.div`
  width: 100%;
  line-height: 18px;
  font-size: ${({ theme }) => theme.sizes.font13};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.questDescription};
  display: flex;
`;

export const QuestSubProcess = styled.div`
  width: 110px;
  max-width: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 10px;
`;

export const QuestSubProcessValue = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;
`;

export const QuestSubProcessCurrentTypo = styled.div`
  text-edge: cap;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.questGuage};
`;

export const QuestSubProcessDivider = styled.div`
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.questSub};
`;

export const QuestSubProcessTargetTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.questSub};
`;

export const QuestSubDivider = styled.div`
  width: 2px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.questDivider2};

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    display: none;
  }
`;

export const QuestReward = styled.div`
  margin: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const QuestRewardIcon = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background-image: url('${({ theme }) => theme.urls.boxIcon}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const QuestRewardValue = styled.div`
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.questBorder};
`;

export const QuestSubProcessGuage = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.questBorder2};
`;

export const QuestSubProcessGuageCurrent = styled.div`
  width: 50%;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.questGuage};
`;

export const PlayButton = styled.div`
  padding: 12px 34px;
  margin: 0 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.questButtonBg};
  color: ${({ theme }) => theme.colors.questSub};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 700;
`;
