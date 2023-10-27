import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const SwapContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const SwapCardList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const SwapCardItem = styled.div`
  width: 100%;
  height: 280px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.cardDivider};
  background: ${({ theme }) => theme.colors.white};
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const TopLeftWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.div`
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font28};
  font-weight: 700;
`;

export const BorderLine = styled(ReactSVG)<{ $width: string }>`
  width: ${({ $width }) => $width}px;
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

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 20px;
`;

export const TopRightWrapper = styled.div`
  width: 150px;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const TicketWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

export const TicketIcon = styled.div`
  width: 50px;
  height: 26px;
  background-image: url('${({ theme }) => theme.urls.ticketIcon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TicketValueTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
  padding-top: 3px;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const BottomLeftWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  gap: 20px;
`;

export const CurrencyLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const ChangeArrow = styled.div``;

export const CurrencyRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const FCTIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url('${({ theme }) => theme.urls.currencyFCT}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const KOAIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url('${({ theme }) => theme.urls.currencyKOA}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CurrencyTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font24};
  font-weight: 600;
  line-height: normal;
`;

export const SingleArrowIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 3px;
  background-image: url('${({ theme }) => theme.urls.swapArrowSingle}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const MultiArrowIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url('${({ theme }) => theme.urls.swapArrowMulti}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BottomRightWrapper = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SwapCardButton = styled.div`
  width: 100%;
  min-width: 180px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.buttonThemeBorder1};
  background: ${({ theme }) => theme.colors.buttonThemeBg1};

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 700;
`;

export const TicketIcon2 = styled.div`
  width: 80px;
  height: 40px;
  background-image: url('${({ theme }) => theme.urls.ticketIcon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
