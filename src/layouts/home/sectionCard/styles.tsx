import { styled } from 'styled-components';
import { ReactSVG } from 'react-svg';

export const SectionCardContainer = styled.div`
  width: 100%;
  margin-top: -130px;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionCardWrapper = styled.div`
  width: 100%;
  z-index: 4;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  min-height: 420px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 20px;

  @media only screen and (min-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) and (max-width: ${({ theme }) =>
      theme.sizes.mediaMaxWidth}) {
    flex-wrap: wrap;
    & > div:nth-child(1) {
      width: calc(50% - 10px);
    }
    & > div:nth-child(2) {
      width: calc(50% - 10px);
    }
    margin: 0 50px;
  }

  @media only screen and (max-width: 1050px) {
    flex-direction: column;
    & > div {
      width: 100% !important;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
    margin: 0 40px;
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    min-width: auto;
  }
`;

export const GameFiCard = styled(Card)`
  gap: 30px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.cardGameFiBg};
`;

export const StakingCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
`;

export const LpCard = styled(Card)`
  justify-content: space-between;

  padding: 30px 34px 36px 34px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
`;

export const TicketCard = styled(Card)`
  justify-content: space-between;

  height: 200px;
  padding: 30px 34px;
  background-color: ${({ theme }) => theme.colors.cardTicketBg};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
`;

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LabelGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const LabelIcon = styled(ReactSVG)`
  height: 26px;
  svg {
    width: 14px;
    height: 26px;
    fill: ${({ theme }) => theme.colors.cardGameFiSubTitle};
  }
`;

export const LabelIcon2 = styled(ReactSVG)`
  height: 15px;
  svg {
    width: 15px;
    height: 15px;
    fill: ${({ theme }) => theme.colors.cardGameFiSubSub};
  }
`;

export const LabelTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font34};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const LinkIcon = styled(ReactSVG)`
  cursor: pointer;
  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const RewardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

export const TitleTypo = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.cardTitle};
  font-size: ${({ theme }) => theme.sizes.font18};
  font-style: normal;
  font-weight: 500;
`;

export const RewardCardList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const RewardCard = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.cardGameFiSubBg};

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    min-height: 120px;
    justify-content: space-between;
    gap: 14px;
  }
`;

export const CardTitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.cardGameFiSubTitle};

  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
`;

export const ValueWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ValueItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 4px;
`;

export const KOAIcon = styled.div`
  width: 20px;
  min-width: 20px;
  height: 20px;
  background-image: url('${({ theme }) => theme.urls.currencyKOA}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ValueIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('${({ theme }) => theme.urls.currencyIcon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ValueTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font20};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export const ValueCurrency = styled.div`
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.cardGameFiSubSub};
`;

export const StakingTop = styled.div`
  width: 100%;
  padding: 30px 34px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const StakingBottom = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.cardStakingBg};
  border-radius: 0 0 20px 20px;
  padding: 16px 40px;
`;

export const LabelRound = styled.div`
  padding: 12px 30px;
  font-size: ${({ theme }) => theme.sizes.font15};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StakingInfoList = styled.div`
  width: 100%;
  margin: 26px 10px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const StakingInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const StakingInfoLabel = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.cardGameFiSubSub};
`;

export const StakingInfoValue = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.font19};
  font-weight: 600;
  letter-spacing: -0.38px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StakingDivider = styled.div`
  width: 2px;
  min-width: 2px;
  margin: 0 16px;
  background-color: ${({ theme }) => theme.colors.cardDivider};
`;

export const StakingChartLabel = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.cardGameFiSubSub};
`;

export const StakingChart = styled.div`
  width: 200px;
  height: 200px;
  background-image: url('${({ theme }) => theme.urls.dummyChart}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LpTop = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;

    & > div:nth-child(2) {
      align-self: flex-end;
    }
  }
`;

export const LpBottom = styled.div`
  width: 100%;
  display: flex;
`;

export const APRInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const APRTitle = styled.div`
  color: ${({ theme }) => theme.colors.aprFont};
  font-family: Poppins;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 2px;
`;

export const APRValueItem = styled.div`
  height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 5px;
`;

export const APRValue = styled.div`
  color: ${({ theme }) => theme.colors.aprFont};
  font-family: Poppins;
  font-size: ${({ theme }) => theme.sizes.font54};
  font-weight: 500;
  letter-spacing: -2.16px;
`;

export const APRPercent = styled.div`
  color: ${({ theme }) => theme.colors.aprFont};
  font-family: Poppins;
  font-size: ${({ theme }) => theme.sizes.font40};
  font-weight: 400;
`;

export const LpInfoList = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin: 0 4px;
`;

export const LpInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;

export const LpInfoLabel = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.cardGameFiSubSub};
`;

export const LpInfoValue = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.font19};
  font-weight: 600;
  letter-spacing: -0.38px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const LpDivider = styled.div`
  width: 2px;
  min-width: 2px;
  margin: 0 16px;
  background-color: ${({ theme }) => theme.colors.cardDivider};
`;

export const TicketTop = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const TicketBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const TicketIcon = styled.div`
  width: 60px;
  height: 30px;
  background-image: url('${({ theme }) => theme.urls.ticketIcon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TicketCount = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font26};
  font-weight: 500;
`;
