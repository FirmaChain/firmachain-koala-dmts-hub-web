import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const EventDetailContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  position: relative;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    padding: 50px 50px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 50px 40px;
  }
`;

export const EventDetailWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;

export const LeftWrapper = styled.div`
  position: sticky;
  top: 116px;
  width: 460px;
  min-width: 460px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    display: none;
  }
`;

export const RightWrapper = styled.div`
  width: 100%;
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CardContainer = styled.div`
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.eventBorder};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CardHeader = styled.div`
  width: 100%;
  padding: 36px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 20px 20px 0 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.eventBorder};
  background-color: ${({ theme }) => theme.colors.cardEventBg};
`;

export const HeaderTitleTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 700;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const HeaderDateTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.eventSub};
`;

export const CardBody = styled.div`
  width: 100%;
  padding: 36px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProgressTitleTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ProgressDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.eventDivider};
  margin-top: 4px;
  margin-bottom: 5px;
`;

export const ProgressSubDivider = styled.div`
  width: 20px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.eventBorder};
`;

export const GuageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const GuageTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 14px 0 10px 0;
`;

export const GuageLabel = styled.div`
  padding: 7px 14px;
  color: ${({ theme }) => theme.colors.eventFont};
  border: 1px solid ${({ theme }) => theme.colors.eventFont};
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 700;
  border-radius: 20px;
`;

export const GuageValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GuageCurrent = styled.div`
  font-size: ${({ theme }) => theme.sizes.font24};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.eventFont};
`;

export const GuageDivider = styled.div`
  font-size: ${({ theme }) => theme.sizes.font20};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.eventSub};
`;

export const GuageMax = styled.div`
  font-size: ${({ theme }) => theme.sizes.font24};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.eventSub};
`;

export const GuageBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GuageData = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.eventGuageBg};
`;

export const GuagePercent = styled.div`
  width: 100px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.eventFont};
`;

export const EventQuestList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 40px;
`;

export const EventQuestItem = styled.div`
  width: 100%;
  gap: 14px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.eventBorder};
  background: ${({ theme }) => theme.colors.eventRewardBg};
`;

export const EventQuestIcon = styled.div`
  width: 80px;
  min-width: 80px;
  height: 85px;
  border-radius: 10px 0 0 10px;
  background-image: url('${({ theme }) => theme.urls.dummyEventDetail}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const EventQuestDescWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const EventQuestTitleTypo = styled.div`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
`;

export const EventQuestDescTypo = styled.div`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.eventSub};
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
`;

export const EventQuestCurrentWrapper = styled.div`
  width: 60px;
  min-width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
`;

export const EventQuestValueWrapper = styled.div`
  width: 100%;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EventQuestPlayButton = styled(ReactSVG)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const EventQuestValueCurrent = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font17};
  font-weight: 600;
`;

export const EventQuestValueDivider = styled.div`
  color: ${({ theme }) => theme.colors.eventSub};
  font-size: ${({ theme }) => theme.sizes.font17};
  font-weight: 600;
`;

export const EventQuestValueMax = styled.div`
  color: ${({ theme }) => theme.colors.eventSub};
  font-size: ${({ theme }) => theme.sizes.font17};
  font-weight: 600;
`;

export const EventDetailBanner = styled.div`
  height: 360px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 20px;
  background-image: url('${({ theme }) => theme.urls.dummyEventDetailBanner}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BannerReward = styled.div`
  width: 100%;
  height: 78px;
  padding: 24px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black}99;
  border-radius: 0 0 20px 20px;
`;

export const BannerRewardTypo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  leading-trim: both;
  text-edge: cap;
  font-family: Poppins;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const BannerRewardDivider = styled.div`
  width: 2px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.eventDescription};
  margin-left: 20px;
  margin-right: 15px;
`;

export const BannerRewardList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const BannerRewardItem = styled.div`
  width: 100%;
  max-height: 30px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.white}CC;
`;

export const BannerRewardIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url('${({ theme }) => theme.urls.boxIcon}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BannerRewardText = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
`;

export const DescriptionTitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 700;
  margin-bottom: 20px;
`;

export const DescriptionContents = styled.div`
  color: ${({ theme }) => theme.colors.questSub};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 20px;
  white-space: pre-line;
`;

export const ResolutionDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    display: none;
  }
`;
