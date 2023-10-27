import styled from 'styled-components';

export const SwapTokenContainer = styled.div`
  width: 100%;
  padding-bottom: 50px;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const TitleIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url('${({ theme }) => theme.urls.swapArrowSingle}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 30px;
  font-size: ${({ theme }) => theme.sizes.font28};
  font-weight: 700;
`;

export const SwapCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SwapCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.stakingBorder};
  background: ${({ theme }) => theme.colors.white};
`;

export const SwapAmountWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.cardDivider};
  background: ${({ theme }) => theme.colors.stakingCardBg2};
  gap: 30px;
`;

export const AmountTopWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const AmountTargetLabel = styled.div`
  padding: 8px 20px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.stakingDesc};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
`;

export const AmountBalance = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 5px;
`;

export const BalanceLabelTypo = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
`;

export const BalanceValueTypo = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
`;

export const AmountBottomWrapper = styled.div<{ $active: boolean }>`
  width: 100%;
  max-width: 540px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.cardDivider};
  background: ${({ $active, theme }) => ($active ? theme.colors.white : theme.colors.stakingCardBg2)};
`;

export const AmountCurrencyWrapper = styled.div`
  width: 150px;
  margin-left: 10px;
  min-width: 150px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AmountDivider = styled.div`
  width: 2px;
  background-color: ${({ theme }) => theme.colors.cardTitle};
  margin: 0 5px;
`;

export const AmountValueWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AmountValueInput = styled.input`
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
  text-align: right;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font22};
  font-weight: 600;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ArrowDownIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.questDivider};
  border-radius: 20px;
  background-image: url('${({ theme }) => theme.urls.arrowDown}');
  background-size: 40%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const RateCard = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.cardDivider};
`;

export const RateLabelTypo = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 600;
`;

export const RateWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const RateItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const RateCurrencyIconTicket = styled.div`
  width: 28px;
  height: 14px;
  background-image: url('${({ theme }) => theme.urls.ticketIcon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const RateTypo = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
`;

export const SwapButton = styled.div`
  width: 100%;
  margin-top: 40px;
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

export const AmountTicketIcon = styled.div`
  width: 40px;
  height: 20px;
  background-image: url('${({ theme }) => theme.urls.ticketIcon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
export const AmountTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font20};
  font-weight: 600;
`;

export const AmountKOAIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url('${({ theme }) => theme.urls.currencyKOA}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
