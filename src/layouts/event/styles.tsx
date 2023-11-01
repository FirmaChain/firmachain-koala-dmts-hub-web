import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const EventContainer = styled.div`
  width: 100%;
  margin-top: -66px;
  margin-bottom: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    padding: 0 50px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 0 40px;
  }
`;

export const EventWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopBackground = styled.div`
  width: 100%;
  height: 592px;
  min-height: 592px;
  max-height: 592px;
  position: absolute;
  top: 0;
  background-image: url('${({ theme }) => theme.urls.dummyEventBg}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TopBannerWrapper = styled.div`
  width: 100%;
  padding-top: 164px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const EventLogo = styled.div`
  width: 368px;
  height: 114px;
  background-image: url('${({ theme }) => theme.urls.eventLogo}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 10px;
`;

export const EventMainDateTypo = styled.div`
  width: 100%;
  max-width: 280px;
  padding: 4px 0;
  border-top: 2px solid ${({ theme }) => theme.colors.white}CC;
  border-bottom: 2px solid ${({ theme }) => theme.colors.white}CC;
  display: flex;
  justify-content: center;

  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

export const EventDescriptionTypo = styled.div`
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  line-height: 22px;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.eventDescription};
`;

export const RewardContainer = styled.div`
  max-width: 350px;
  height: 30px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.eventRewardBorder};
  background: ${({ theme }) => theme.colors.eventRewardBg};
  gap: 14px;
`;

export const RewardMainTitleTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.eventSub};
`;

export const RewardMainIcon = styled.div<{ $src?: string }>`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background-image: url('${({ theme, $src }) => ($src ? $src : theme.urls.boxIcon)}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const RewardMainNameTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font15};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const CardContainer = styled.div`
  width: 100%;
  margin-top: 45px;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.eventBorder};
  background-color: ${({ theme }) => theme.colors.cardEventBg};
`;

export const CardHeader = styled.div`
  width: 100%;
  padding: 14px 14px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.eventBorder};
`;

export const CardLabel = styled.div`
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 0px;
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.eventIcon};
`;

export const EventIcon = styled(ReactSVG)`
  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const HeaderTypo = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.font30};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const CardDivider = styled.div`
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 280px;
  height: 2px;
  background: ${({ theme }) => theme.colors.textPrimary};
`;

export const CardBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const EventList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px 36px;
  gap: 20px;
  flex-wrap: wrap;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
  }
`;

export const EventItem = styled.div<{ $disable?: boolean }>`
  width: calc(33% - 10px);
  height: 512px;
  min-height: 512px;
  max-height: 512px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${({ theme, $disable }) => ($disable ? '#EEE' : theme.colors.white)};
  border: 1px solid ${({ theme }) => theme.colors.eventBorder};

  @media only screen and (max-width: 1400px) {
    width: calc(50% - 10px);
    justify-content: space-between;
  }

  @media only screen and (max-width: 1000px) {
    width: calc(100% - 10px);
    justify-content: space-between;
  }
`;

export const EventImage = styled.div<{ $src: string; $disable?: boolean }>`
  width: 100%;
  height: 240px;
  background: ${({ $disable }) => $disable && `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),`}
    url('${({ $src }) => $src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px 10px 0 0;
`;

export const EventDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 30px 34px;
`;

export const EventNameTypo = styled.div`
  min-height: 45px;
  font-size: ${({ theme }) => theme.sizes.font17};
  font-weight: 700;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 20px;
`;

export const RewardWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cardEventBg};
  border: 1px solid ${({ theme }) => theme.colors.eventBorder};
  border-radius: 6px;
  gap: 10px;
  margin-bottom: 20px;
`;

export const RewardLabelTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.eventSub};
  margin-left: 14px;
`;

export const EventDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.eventDivider};
`;

export const EventItemBottomWrapper = styled.div`
  width: 100%;
  min-height: 66px;
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
  font-size: ${({ theme }) => theme.sizes.font22};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.eventFont};
`;

export const GuageDivider = styled.div`
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.eventSub};
`;

export const GuageMax = styled.div`
  font-size: ${({ theme }) => theme.sizes.font20};
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
  width: 40%;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.eventFont};
`;

export const RewardIcon = styled.div<{ $src?: string }>`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background-image: url('${({ theme, $src }) => ($src ? $src : theme.urls.boxIcon)}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const RewardNameTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const EventDateTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.eventSub};
  margin-bottom: 5px;
`;

export const SortWrapper = styled.div`
  width: 360px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SortSelect = styled.select`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.eventBorder};
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 20px;
`;

export const SortOption = styled.option``;

export const EventButton = styled.div<{ $active: boolean }>`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  cursor: pointer;
  ${({ theme, $active }) =>
    $active
      ? `color: ${theme.colors.eventSub};border: 2px solid${theme.colors.eventRewardBorder}`
      : `color: ${theme.colors.eventRewardBorder};border: 2px solid${theme.colors.eventBorder}`};
`;
