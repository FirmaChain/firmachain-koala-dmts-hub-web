import { styled } from 'styled-components';

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RateWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
`;

export const RateItem = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const RateCurrencyIconFCT = styled.div`
  width: 16px;
  height: 16px;
  background-image: url('${({ theme }) => theme.urls.currencyFCT}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const RateCurrencyIconKOA = styled.div`
  width: 16px;
  height: 16px;
  background-image: url('${({ theme }) => theme.urls.currencyKOA}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const RateTypo = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
`;

export const ChartCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
  background: ${({ theme }) => theme.colors.white};
`;

export const ChartTopWrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px 40px;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardDivider};
`;

export const ChartTopLeftWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const ChartTopRightWrapper = styled.div`
  width: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 5px;
`;

export const AprLabelTypo = styled.div`
  color: ${({ theme }) => theme.colors.submenuActive};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 500;
`;

export const AprValueTypo = styled.div`
  color: ${({ theme }) => theme.colors.submenuActive};
  font-size: ${({ theme }) => theme.sizes.font20};
  font-weight: 600;
`;

export const ChartBottomWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
`;

export const ChartBottomLeftWrapper = styled.div`
  width: 510px;
  min-width: 510px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ChartLabelList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChartLabelItem = styled.div<{ $active: boolean }>`
  width: 100%;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  ${({ $active, theme }) => $active === false && `border-bottom: 1px solid ${theme.colors.cardDivider2};`}
  border-right: 6px solid ${({ $active, theme }) => ($active ? theme.colors.buttonThemeBg1 : theme.colors.cardDivider)};
  background-color: ${({ $active, theme }) => ($active ? theme.colors.lppoolChartBg : '')};
  & > div:nth-child(1) {
    color: ${({ $active, theme }) => ($active ? theme.colors.buttonThemeBg1 : theme.colors.stakingDesc)};
    font-weight: ${({ $active, theme }) => ($active ? '600' : '500')};
  }
`;

export const ChartLabelTypo = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
`;

export const ChartLabelValue = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
`;

export const ChartBottomRightWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DummyChart = styled.div`
  width: 662px;
  height: 341px;
  background-image: url('${({ theme }) => theme.urls.dummyChart2}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
