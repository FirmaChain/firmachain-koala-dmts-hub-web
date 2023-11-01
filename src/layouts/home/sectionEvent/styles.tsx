import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const EventSectionContainer = styled.div`
  margin-top: 40px;
  width: 100%;
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

export const CardContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
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

export const ExternalLinkIcon = styled(ReactSVG)`
  svg {
    width: 32px;
    height: 30px;
    fill: ${({ theme }) => theme.colors.eventSub};
  }
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px 36px;
  gap: 20px;
  align-items: stretch;
`;

export const EventItem = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.eventBorder};
`;

export const EventImage = styled.div<{ $src: string }>`
  width: 100%;
  height: 240px;
  background-image: url('${({ $src }) => $src}');
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

export const EventDateTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.eventSub};
  margin-bottom: 5px;
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

export const EventDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.eventDivider};
`;

export const GaugeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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
  width: 70px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.eventFont};
`;
